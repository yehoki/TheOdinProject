function makeBoard() {
  const board = [];
  for (let i = 0; i < 8; i++) {
    const col = [];
    for (let j = 0; j < 8; j++) {
      const row = [];
      col.push(row);
    }
    board.push(col);
  }
  return board;
}

const newBoard = makeBoard();
// console.log(newBoard[0][0]);

class Node {
  constructor(position, path = [position]) {
    this.position = position;
    this.path = path;
  }
}

const moves = [
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
];

// returns all the legal moves from a position in an 8x8 chess grid
function legalMoves(position) {
  const legal = [];
  for (const move of moves) {
    const newRow = position[0] + move[0];
    const newCol = position[1] + move[1];
    if (0 <= newRow && newRow <= 7 && 0 <= newCol && newCol <= 7) {
      legal.push([newRow, newCol]);
    }
  }
  return legal;
}

// console.log(legalMoves([1, 2]));

// finds the path from the knight position to the target using BFS algorithm
function KnightMoves(knight, target) {
  //   creates the current node at the knight position
  let current = new Node(knight, [knight]);
  //   new array acting as a queue with the knight as its first element
  let queue = [];
  queue.push(current);
  // We run through this until for as long as the current node we are looking at is not the target
  while (JSON.stringify(current.position) !== JSON.stringify(target)) {
    // going through all possibilites that are not the starting point - will make sure we aren't backtracking
    let possibleMoves = legalMoves(current.position).filter(
      (move) => JSON.stringify(move) !== JSON.stringify(knight)
    );
    // for each of the possible moves:
    // make a new node and push it to the back of the queue
    // each path will stay unique as we are concatenating the current move to the already existing path
    possibleMoves.forEach((move) => {
      let newNode = new Node(move, current.path.concat([move]));
      queue.push(newNode);
    });
    // queue shift removes the first element in an array, and returns that element
    // we assign the current node as the node that's next
    current = queue.shift();
  }
  return `You made it in ${
    current.path.length - 1
  } moves! Here is your path: ${callPath(current.path)}}`;
}

// formats the path when displayed.
function callPath(path) {
  let formatPath = "\n";
  for (const move of path) {
    formatPath += `[${move}]` + "\n";
  }
  return formatPath;
}
console.log(KnightMoves([0, 0], [3, 3]));
console.log(KnightMoves([7, 7], [2, 5]));


// O(N^2) time complexity for NxN grid
// O(N) space complexity, as most number of elements in a queue will be N since there are
// at most N possible moves (at least in the case of an 8x8 grid).