function findPawnMoves(position) {
  console.log(typeof position);

  // check the position number
  const number = Number.parseInt(position[1]);
  console.log(number);

  // if position is on starting row
  let letter = position[0];

  if (number == !1) {
    return `${letter + (number + 1)}`;
  } else {
    return `[${letter + (number + 1)}, ${letter + (number + 2)}]`;
  }

  // return position;
}
