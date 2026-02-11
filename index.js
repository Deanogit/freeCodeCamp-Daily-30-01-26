function findPawnMoves(position) {
  console.log(typeof position);

  // check the position number
  const number = parseInt(position[1]);
  console.log(number);

  // if position is on starting row
  const letter = position[0];

  // arr for moves
  const moves = [];

  // top of board
  if (number === 8) return [];

  // Standard move, one square up;
  moves.push(`${letter + (number + 1)}`);

  if (number === 2) {
    moves.push(`${letter + (number + 2)}`);
  }

  return moves;

  // return position;
}
