/*
    Tetrominoes are defined as coordinates within a 4x4 bounding box.
    Each has a rotational center, denoted by the highlighted square or arrows.
     ___________      ___________      ___________      ___________      ___________      ___________      ___________ 
   3|  	 ⌟⌞     |   3|   □⌟⌞□    |   3|   □       |   3|   □  □    |   3|□  □       |   3|□          |   3|   □       |
   2|□  □⌝⌜□  □ |   2|   □⌝⌜□    |   2|□  ▣  □    |   2|□  ▣       |   2|   ▣  □    |   2|□  ▣  □    |   2|   ▣       |
   1|           |   1|           |   1|           |   1|           |   1|           |   1|           |   1|   □  □    |
   0|___________|   0|___________|   0|___________|   0|___________|   0|___________|   0|___________|   0|___________|
     0  1  2  3       0  1  2  3       0  1  2  3       0  1  2  3       0  1  2  3       0  1  2  3       0  1  2  3  
                 
         I                O                T                S                Z                J                L      
 */
const tetrominoes = {
  I: {
    blocks: [
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 2],
    ],
    rotationalCenter: [1.5, 2.5]
  },
  O: {
    blocks: [
      [1, 2],
      [2, 2],
      [1, 3],
      [2, 3],
    ],
    rotationalCenter: [1.5, 2.5]
  },
  T: {
    blocks: [
      [0, 2],
      [1, 2],
      [2, 2],
      [1, 3],
    ],
    rotationalCenter: [1, 2]
  },
  S: {
    blocks: [
      [0, 2],
      [1, 2],
      [1, 3],
      [2, 3],
    ],
    rotationalCenter: [1, 2]
  },
  Z: {
    blocks: [
      [0, 3],
      [1, 3],
      [1, 2],
      [2, 2],
    ],
    rotationalCenter: [1, 2]
  },
  J: {
    blocks: [
      [0, 3],
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    rotationalCenter: [1, 2]
  },
  L: {
    blocks: [
      [1, 3],
      [1, 2],
      [1, 1],
      [2, 1],
    ],
    rotationalCenter: [1, 2]
  },
};

export default tetrominoes;