from pathlib import Path
import base64
import json
import os
import random
import subprocess

def gpg_encrypt(plaintext, key):
    # For security reasons, GPG always prefers to read and write from files.
    tmp = os.environ.get('RUNNER_TEMP', '/tmp')
    with open(f'{tmp}/plaintext.txt', 'w') as f:
        f.write(plaintext)
    with open(f'{tmp}/key.txt', 'w') as f:
        f.write(key)
    subprocess.run([
        'gpg', '--batch', '--symmetric',
        '--cipher-algo', 'AES256',
        '--passphrase-file', f'{tmp}/key.txt',
        '-o', f'{tmp}/ciphertext.txt',
        '-c', f'{tmp}/plaintext.txt', # Inexplicably, the plaintext *must* be the last option.
    ], check=True, stdout=subprocess.DEVNULL)
    with open(f'{tmp}/ciphertext.txt', 'rb') as f:
        return f.read().hex()

print('Validating puzzle...')
puzzle_list = open('.github/workflows/template_validate.html', 'r', encoding='utf-8').read()
puzzle = os.environ['PUZZLE']
puzzle_list = puzzle_list.replace('%input_data%', puzzle) # Let javascript do the object load; we'll be happy with whatever.

tempfile = Path('temp.html').resolve()
with tempfile.open('w', encoding='utf-8') as f:
    f.write(puzzle_list)

args = ['google-chrome-stable', tempfile.as_uri(), '--headless=new', '--dump-dom']
dom = subprocess.run(args, text=True, encoding='utf-8', stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, check=True).stdout

tempfile.unlink() # So that it doesn't get committed

data = dom[dom.index('!!!')+3:dom.index('@@@')]
data = json.loads(data)
if not data.get('valid', False):
    print('Puzzle was not valid:', data['error'])
    exit(1)
print('Puzzle validated!')

# Extract data from the data (in case we fail, not that we should)
title = data['title']
img_bytes = base64.b64decode(data['screenshot'][len('data:image/png;base64,'):])
puzzle_json = data['puzzle_json']
solution_path = data['solution_path']

# Encrypt this since we'll be saving it directly on the page
solution_path = gpg_encrypt(solution_path, os.environ['SECRET'])

# This is a slightly updated display_hash solution -- rather than hashing the puzzle, I'm just generating a random ID every time.
# (Also, I'm flattening the alphabet ahead of time to avoid letter bias.)
# Alphabet of size 32: [0-9A-Z] / [I1O0]
# 8 characters at 5 bits each = 40 bits = 2^40 words
# 50% of collision if I ever get 2^20 (~1,000,000) puzzles
alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
display_hash = ''.join(random.choices(alphabet, k=8))
image_url = f'images/{display_hash}.png'
page_url = f'play/{display_hash}.html'

print('Saving puzzle image...')
with open(image_url, 'xb') as f:
    f.write(img_bytes)

print('Creating puzzle page...')
contents = open('.github/workflows/template_play.html', 'r', encoding='utf-8').read()
contents = contents \
    .replace('%title%', title) \
    .replace('%display_hash%', display_hash) \
    .replace('%image_url%', image_url) \
    .replace('%puzzle%', puzzle_json) \
    .replace('%solution%', solution_path)
with open(page_url, 'x', encoding='utf-8') as f:
    f.write(contents)

contents = open('puzzle_list.js', 'r', encoding='utf-8').read().split('\n')
contents.insert(1, f'"{display_hash}{title}",')
with open('puzzle_list.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(contents))

# Needed for the commit message. Don't use the title because it's user-controlled, and thus an attack vector.
print(f'Done, created puzzle pages for display_hash={display_hash}')
with open(os.environ['GITHUB_OUTPUT'], 'w') as f:
  f.write(f'display_hash={display_hash}')
