function draw(puzzle, target='puzzle') {
  console.log('Drawing', puzzle, 'into', target)
  if (puzzle == undefined) return
  var svg = document.getElementById(target)
  while (svg.firstChild) svg.removeElement(firstChild)

  if (puzzle.pillar) {
    // 41*(width-1) + 30*2 (padding) + 10*2 (border)
    var pixelWidth = 41*puzzle.grid.length + 80
  } else {
    // 41*(width-1) + 24 (extra edge) + 30*2 (padding) + 10*2 (border)
    var pixelWidth = 41*puzzle.grid.length + 63
  }
  var pixelHeight = 41*puzzle.grid[0].length + 63
  svg.setAttribute('viewbox', '0 0 ' + pixelWidth + ' ' + pixelHeight)
  svg.style.width = pixelWidth
  svg.style.height = pixelHeight

  var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  svg.appendChild(rect)
  rect.setAttribute('stroke-width', 10)
  rect.setAttribute('stroke', 'black')
  rect.setAttribute('fill', BACKGROUND)
  // Accounting for the border thickness
  rect.setAttribute('x', 5)
  rect.setAttribute('y', 5)
  rect.setAttribute('width', pixelWidth - 10) // Removing border
  rect.setAttribute('height', pixelHeight - 10) // Removing border

  for (var x=0; x<puzzle.grid.length; x++) {
    for (var y=0; y<puzzle.grid[x].length; y++) {
      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('stroke-width', 24)
      line.setAttribute('stroke-linecap', 'round')
      line.setAttribute('stroke', FOREGROUND)
      line.id = target + '_' + x + '_' + y // TODO: Currently only used for gaps.
      if (x%2 == 1 && y%2 == 0) { // Horizontal
        line.setAttribute('x1', (x-1)*41 + 52)
        if (puzzle.pillar && x == puzzle.grid.length - 1) {
          line.setAttribute('x2', (x+1)*41 + 28)
        } else {
          line.setAttribute('x2', (x+1)*41 + 52)
        }
        line.setAttribute('y1', y*41 + 52)
        line.setAttribute('y2', y*41 + 52)
        svg.appendChild(line)
      } else if (x%2 == 0 && y%2 == 1) { // Vertical
        line.setAttribute('x1', x*41 + 52)
        line.setAttribute('x2', x*41 + 52)
        line.setAttribute('y1', (y-1)*41 + 52)
        line.setAttribute('y2', (y+1)*41 + 52)
        svg.appendChild(line)
      }
    }
  }
  // Draw cell symbols after so they overlap the lines, if necessary
  for (var x=1; x<puzzle.grid.length; x+=2) {
    for (var y=1; y<puzzle.grid[x].length; y+=2) {
      if (puzzle.grid[x][y]) {
        var params = JSON.parse(JSON.stringify(puzzle.grid[x][y]))
        params.width = 58
        params.height = 58
        params.x = x*41 + 23
        params.y = y*41 + 23
        drawSymbolWithSvg(svg, params)
      }
    }
  }

  for (var dot of puzzle.dots) {
    var params = {'type':'dot', 'width':58, 'height':58}
    params.x = dot.x*41 + 23
    params.y = dot.y*41 + 23
    drawSymbolWithSvg(svg, params)
  }

  for (var gap of puzzle.gaps) {
    var line = document.getElementById(target + '_' + gap.x + '_' + gap.y)
    svg.removeChild(line)
    var params = {'type':'gap', 'width':58, 'height':58}
    params.x = gap.x*41 + 23
    params.y = gap.y*41 + 23
    if (gap.x%2 == 0 && gap.y%2 == 1) params.rot = 1
    drawSymbolWithSvg(svg, params)
  }

  drawSymbolWithSvg(svg, {
    'type':'start',
    'width': 58,
    'height': 58,
    'x': puzzle.start.x*41 + 23,
    'y': puzzle.start.y*41 + 23,
  })
  svg.lastChild.onclick = svg.lastChild.ontouchstart = function(event) {
    trace(this, event, puzzle)
  }

  if (puzzle.end.dir == undefined) {
    if (puzzle.end.x == 0) {
      puzzle.end.dir = 'left'
    } else if (puzzle.end.x == puzzle.grid.length - 1) {
      puzzle.end.dir = 'right'
    } else if (puzzle.end.y == 0) {
      puzzle.end.dir = 'top'
    } else if (puzzle.end.y == puzzle.grid[puzzle.end.x].length - 1) {
      puzzle.end.dir = 'bottom'
    }
  }
  drawSymbolWithSvg(svg, {
    'type':'end',
    'width': 58,
    'height': 58,
    'dir': puzzle.end.dir,
    'x': puzzle.end.x*41 + 23,
    'y': puzzle.end.y*41 + 23,
  })
}
