function getPolyomino(size=null, shape=null, rot=null) {
  if (size == null) {
    return Object.keys(POLYOMINOS)
  }
  if (shape == null) {
    return Object.keys(POLYOMINOS[size])
  }
  if (rot == null) {
    return POLYOMINOS[size][shape].length
  } else if (rot == 'all') {
    return POLYOMINOS[size][shape]
  } else {
    return [POLYOMINOS[size][shape][rot]]
  }
}

// IMPORTANT NOTE: When formulating these, the top-left must be 0, 0.
// That means there can never be any negative x values.
POLYOMINOS = {
    '1':{
    'O':[[
            {'x':0, 'y':0}
        ]],
  },'2':{
    'I':[[
            {'x':0, 'y':0},
            {'x':2, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}
        ]],
    '/':[[
                            {'x':0, 'y':0},
            {'x':2, 'y':-2}
        ],[
            {'x':0, 'y':0},
                            {'x':2, 'y':2}
        ]],
  },'3':{
    'I':[[
            {'x':0, 'y':0},
            {'x':2, 'y':0},
            {'x':4, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4}
        ]],
    'L':[[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
                            {'x':2, 'y':2}
        ],[
                             {'x':0, 'y':0},
            {'x':2, 'y':-2}, {'x':2, 'y':0}
        ]],
    'V':[[
            {'x':0, 'y':0},                 {'x':0, 'y':4},
                            {'x':2, 'y':2}
        ],[
                            {'x':0, 'y':0},
            {'x':2, 'y':-2},
                            {'x':4, 'y':0}
        ],[
                            {'x':0, 'y':0},
            {'x':2, 'y':-2},                {'x':2, 'y':2},
        ],[
            {'x':0, 'y':0},
                            {'x':2, 'y':2},
            {'x':4, 'y':0}
        ]],
    'N':[[
                            {'x':0, 'y':0},
                            {'x':2, 'y':0},
            {'x':4, 'y':-2}
        ],[
            {'x':0, 'y':0},
                            {'x':2, 'y':2}, {'x':2, 'y':4}
        ],[
                            {'x':0, 'y':0},
            {'x':2, 'y':-2},
            {'x':4, 'y':-2}
        ],[
                            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':-2},
        ]],
    'M':[[
            {'x':0, 'y':0},
            {'x':2, 'y':0},
                            {'x':4, 'y':2}
        ],[
                            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':-2}
        ],[
            {'x':0, 'y':0},
                            {'x':2, 'y':2},
                            {'x':4, 'y':2}
        ],[
                                            {'x':0, 'y':0},
            {'x':2, 'y':-4}, {'x':2, 'y':-2},
        ]],
  },'4':{
    'I':[[
            {'x':0, 'y':0},
            {'x':2, 'y':0},
            {'x':4, 'y':0},
            {'x':6, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4}, {'x':0, 'y':6}
        ]],
    'J':[[
                             {'x':0, 'y':0},
                             {'x':2, 'y':0},
            {'x':4, 'y':-2}, {'x':4, 'y':0}
        ],[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2}, {'x':2, 'y':4}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':0},
            {'x':4, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
                                            {'x':2, 'y':4}
        ]],
    'L':[[
            {'x':0, 'y':0},
            {'x':2, 'y':0},
            {'x':4, 'y':0}, {'x':4, 'y':2}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
            {'x':2, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
                            {'x':2, 'y':2},
                            {'x':4, 'y':2}
        ],[
                                              {'x':0, 'y':0},
            {'x':2, 'y':-4}, {'x':2, 'y':-2}, {'x':2, 'y':0}
        ]],
    'O':[[
            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':0}, {'x':2, 'y':2}
        ]],
    'S':[[
                             {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':-2}, {'x':2, 'y':0}
        ],[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2},
                            {'x':4, 'y':2}
        ]],
    'T':[[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
                            {'x':2, 'y':2}
        ],[
                             {'x':0, 'y':0},
            {'x':2, 'y':-2}, {'x':2, 'y':0},
                             {'x':4, 'y':0}
        ],[
                             {'x':0, 'y':0},
            {'x':2, 'y':-2}, {'x':2, 'y':0}, {'x':2, 'y':2}
        ],[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2},
            {'x':4, 'y':0}
        ]],
    'Z':[[
            {'x':0, 'y':0}, {'x':0, 'y':2},
                            {'x':2, 'y':2}, {'x':2, 'y':4}
        ],[
                             {'x':0, 'y':0},
            {'x':2, 'y':-2}, {'x':2, 'y':0},
            {'x':4, 'y':-2}
        ]],
    'N':[[
                            {'x':0, 'y':0},
                            {'x':2, 'y':0},
            {'x':4, 'y':-2},
            {'x':6, 'y':-2},
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
                                            {'x':2, 'y':4}, {'x':2, 'y':6}
        ]],
    '=':[[
            {'x':0, 'y':0}, {'x':0, 'y':2},

            {'x':4, 'y':0}, {'x':4, 'y':2}
        ],[
            {'x':0, 'y':0},                 {'x':0, 'y':4},
            {'x':2, 'y':0},                 {'x':2, 'y':4}
        ]],
},'5':{
    'F':[[
                             {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':-2}, {'x':2, 'y':0},
                             {'x':4, 'y':0}
        ],[
                             {'x':0, 'y':0},
            {'x':2, 'y':-2}, {'x':2, 'y':0}, {'x':2, 'y':2},
                                             {'x':4, 'y':2}
        ],[
                             {'x':0, 'y':0},
                             {'x':2, 'y':0}, {'x':2, 'y':2},
            {'x':4, 'y':-2}, {'x':4, 'y':0}
        ],[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2}, {'x':2, 'y':4},
                            {'x':4, 'y':2}
        ]],
    'G':[[
            {'x':0, 'y':0}, {'x':0, 'y':2},
                            {'x':2, 'y':2}, {'x':2, 'y':4},
                            {'x':4, 'y':2}
        ],[
                             {'x':0, 'y':0},
            {'x':2, 'y':-2}, {'x':2, 'y':0}, {'x':2, 'y':2},
            {'x':4, 'y':-2}
        ],[
                              {'x':0, 'y':0},
             {'x':2, 'y':-2}, {'x':2, 'y':0},
                              {'x':4, 'y':0}, {'x':4, 'y':2}
        ],[
                                              {'x':0, 'y':0},
            {'x':2, 'y':-4}, {'x':2, 'y':-2}, {'x':2, 'y':0},
            {'x':4, 'y':-2}
        ]],
    'B':[[
            {'x':0, 'y':0},
            {'x':2, 'y':0},
            {'x':4, 'y':0}, {'x':4, 'y':2},
            {'x':6, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4}, {'x':0, 'y':6},
                            {'x':2, 'y':2}
        ],[
                             {'x':0, 'y':0},
                             {'x':2, 'y':0},
            {'x':4, 'y':-2}, {'x':4, 'y':0},
                             {'x':6, 'y':0}
        ],[
                                              {'x':0, 'y':0},
            {'x':2, 'y':-4}, {'x':2, 'y':-2}, {'x':2, 'y':0}, {'x':2, 'y':2}
        ]],
    'D':[[
                             {'x':0, 'y':0},
                             {'x':2, 'y':0},
            {'x':4, 'y':-2}, {'x':4, 'y':0},
                             {'x':6, 'y':0}
        ],[
                             {'x':0, 'y':0},
            {'x':2, 'y':-2}, {'x':2, 'y':0}, {'x':2, 'y':2}, {'x':2, 'y':4},
        ],[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2},
            {'x':4, 'y':0},
            {'x':6, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4}, {'x':0, 'y':6},
                                            {'x':2, 'y':4}
        ]],
    'L':[[
            {'x':0, 'y':0},
            {'x':2, 'y':0},
            {'x':4, 'y':0},
            {'x':6, 'y':0}, {'x':6, 'y':2}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4}, {'x':0, 'y':6},
            {'x':2, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
                            {'x':2, 'y':2},
                            {'x':4, 'y':2},
                            {'x':6, 'y':2}
        ],[
                                                               {'x':0, 'y':0},
            {'x':2, 'y':-6}, {'x':2, 'y':-4}, {'x':2, 'y':-2}, {'x':2, 'y':0}
        ]],
    'J':[[
                             {'x':0, 'y':0},
                             {'x':2, 'y':0},
                             {'x':4, 'y':0},
            {'x':6, 'y':-2}, {'x':6, 'y':0}
        ],[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2}, {'x':2, 'y':4}, {'x':2, 'y':6}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':0},
            {'x':4, 'y':0},
            {'x':6, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4}, {'x':0, 'y':6},
                                                            {'x':2, 'y':6}
        ]],
    'N':[[
                             {'x':0, 'y':0},
                             {'x':2, 'y':0},
            {'x':4, 'y':-2}, {'x':4, 'y':0},
            {'x':6, 'y':-2}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
                            {'x':2, 'y':2}, {'x':2, 'y':4}, {'x':2, 'y':6}
        ],[
                             {'x':0, 'y':0},
            {'x':2, 'y':-2}, {'x':2, 'y':0},
            {'x':4, 'y':-2},
            {'x':6, 'y':-2}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
                                            {'x':2, 'y':4}, {'x':2, 'y':6}
        ]],
    'M':[[
            {'x':0, 'y':0},
            {'x':2, 'y':0},
            {'x':4, 'y':0}, {'x':4, 'y':2},
                            {'x':6, 'y':2}
        ],[
                             {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
            {'x':2, 'y':-2}, {'x':2, 'y':0}
        ],[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2},
                            {'x':4, 'y':2},
                            {'x':6, 'y':2}
        ],[
                                              {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':-4}, {'x':2, 'y':-2}, {'x':2, 'y':0}
        ]],
    'P':[[
            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':0}, {'x':2, 'y':2},
            {'x':4, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
                            {'x':2, 'y':2}, {'x':2, 'y':4}
        ],[
                             {'x':0, 'y':0},
            {'x':2, 'y':-2}, {'x':2, 'y':0},
            {'x':4, 'y':-2}, {'x':4, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':0}, {'x':2, 'y':2}, {'x':2, 'y':4}
        ]],
    'Q':[[
            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':0}, {'x':2, 'y':2},
                            {'x':4, 'y':2}
        ],[
                             {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':-2}, {'x':2, 'y':0}, {'x':2, 'y':2}
        ],[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2},
            {'x':4, 'y':0}, {'x':4, 'y':2}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
            {'x':2, 'y':0}, {'x':2, 'y':2}
        ]],
    'T':[[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
                            {'x':2, 'y':2},
                            {'x':4, 'y':4}
        ],[
                                              {'x':0, 'y':0},
            {'x':2, 'y':-4}, {'x':2, 'y':-2}, {'x':2, 'y':0},
                                              {'x':4, 'y':0}
        ],[
                             {'x':0, 'y':0},
                             {'x':2, 'y':0},
            {'x':4, 'y':-2}, {'x':4, 'y':0}, {'x':4, 'y':2}
        ],[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2}, {'x':2, 'y':4},
            {'x':4, 'y':0}
        ]],
    'U':[[
            {'x':0, 'y':0},                 {'x':0, 'y':4},
            {'x':2, 'y':0}, {'x':2, 'y':2}, {'x':2, 'y':4}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':0},
            {'x':4, 'y':0}, {'x':4, 'y':2}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
            {'x':2, 'y':0},                 {'x':2, 'y':4}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
                            {'x':2, 'y':2},
            {'x':4, 'y':0}, {'x':4, 'y':2}
        ]],
    'V':[[
            {'x':0, 'y':0},
            {'x':2, 'y':0},
            {'x':4, 'y':0}, {'x':4, 'y':2}, {'x':4, 'y':4}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
            {'x':2, 'y':0},
            {'x':4, 'y':0}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
                                            {'x':2, 'y':4},
                                            {'x':4, 'y':4}
        ],[
                                              {'x':0, 'y':0},
                                              {'x':2, 'y':0},
            {'x':4, 'y':-4}, {'x':4, 'y':-2}, {'x':4, 'y':0}
        ]],
    'W':[[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2},
                            {'x':4, 'y':2}, {'x':4, 'y':4}
        ],[
                             {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':-2}, {'x':2, 'y':0},
            {'x':4, 'y':-2}
        ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
                            {'x':2, 'y':2}, {'x':2, 'y':4},
                                            {'x':4, 'y':4}
        ],[
                                              {'x':0, 'y':0},
                             {'x':2, 'y':-2}, {'x':2, 'y':0},
            {'x':4, 'y':-4}, {'x':4, 'y':-2}
        ]],
    'X':[[
                             {'x':0, 'y':0},
            {'x':2, 'y':-2}, {'x':2, 'y':0}, {'x':2, 'y':2},
                             {'x':4, 'y':0}
        ]],
    'S':[[
                             {'x':0, 'y':0}, {'x':0, 'y':2},
                             {'x':2, 'y':0},
            {'x':4, 'y':-2}, {'x':4, 'y':0}
        ],[
            {'x':0, 'y':0},
            {'x':2, 'y':0}, {'x':2, 'y':2}, {'x':2, 'y':4},
                                            {'x':4, 'y':4}
        ]],
    'Z':[[
            {'x':0, 'y':0}, {'x':0, 'y':2},
                            {'x':2, 'y':2},
                            {'x':4, 'y':2}, {'x':4, 'y':4}
        ],[
                                              {'x':0, 'y':0},
            {'x':2, 'y':-4}, {'x':2, 'y':-2}, {'x':2, 'y':0},
            {'x':4, 'y':-4}
        ]],
/* Custom polyominos */
  },'6':{
    '?':[[
            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':0}, {'x':2, 'y':2},
            {'x':4, 'y':0}, {'x':4, 'y':2}
        ]],
  },'9':{
    'O':[[
            {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
            {'x':2, 'y':0}, {'x':2, 'y':2}, {'x':2, 'y':4},
            {'x':4, 'y':0}, {'x':4, 'y':2}, {'x':4, 'y':4}
        ]],
  },'11':{
    '?':[[
                             {'x':0, 'y':0}, {'x':0, 'y':2},
                             {'x':2, 'y':0}, {'x':2, 'y':2},
            {'x':4, 'y':-2}, {'x':4, 'y':0}, {'x':4, 'y':2}, {'x':4, 'y':4},
            {'x':6, 'y':-2}, {'x':6, 'y':0}, {'x':6, 'y':2}
    ],[
            {'x':0, 'y':0}, {'x':0, 'y':2},
            {'x':2, 'y':0}, {'x':2, 'y':2}, {'x':2, 'y':4}, {'x':2, 'y':6},
            {'x':4, 'y':0}, {'x':4, 'y':2}, {'x':4, 'y':4}, {'x':4, 'y':6},
                            {'x':6, 'y':2}
    ],[
                             {'x':0, 'y':0}, {'x':0, 'y':2}, {'x':0, 'y':4},
            {'x':2, 'y':-2}, {'x':2, 'y':0}, {'x':2, 'y':2}, {'x':2, 'y':4},
                             {'x':4, 'y':0}, {'x':4, 'y':2},
                             {'x':6, 'y':0}, {'x':6, 'y':2}
    ],[
                                              {'x':0, 'y':0},
            {'x':2, 'y':-4}, {'x':2, 'y':-2}, {'x':2, 'y':0}, {'x':2, 'y':2},
            {'x':4, 'y':-4}, {'x':4, 'y':-2}, {'x':4, 'y':0}, {'x':4, 'y':2},
                                              {'x':6, 'y':0}, {'x':6, 'y':2}
    ]],
  }
}
