import {W, B, E, P, createBoard, tile, score, playerTurn, takeTurn, getAnnotatedBoard} from './game-logic';

test('score() gives the correct score for board configuration.', () => {
  const board = createBoard([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);


  expect(score(board)).toEqual({
    black: 2,
    white: 2
  })
  const board2 = createBoard([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, B, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);

  expect(score(board2)).toEqual({
    black: 3,
    white: 2
  })
});

test('board.playerTurn tells us whose turn is next.', () => {
  const board = createBoard([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);
  expect(board.playerTurn).toEqual(B);
  takeTurn(board, [1, 3])
  expect(board.playerTurn).toEqual(W);
});

test('takeTurn() errors if a piece is placed on an existing one.', () => {
  const board = createBoard([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);
  expect(() => takeTurn(board, [2, 2])).toThrow('Error: You cannot place a piece on an occupied square.');
});

test('takeTurn() errors if a piece is not placed adjacent to another piece.', () => {
  const board = createBoard([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);
  expect(() => takeTurn(board, [0, 0])).toThrow('Error: The piece must be placed adjacent to another piece.');

  const board2 = createBoard([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);
  expect(() => takeTurn(board2, [1, 0])).toThrow('Error: The piece must be placed adjacent to another piece.');
});

test('takeTurn() replaces an empty space with the correct letter.', () => {
  const board = createBoard([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);
  expect(tile(board, [1, 1])).toEqual(E);
  takeTurn(board, [1, 1]);
  expect(tile(board, [1, 1])).toEqual(B);
  takeTurn(board, [4, 4]);
  expect(tile(board, [4, 4])).toEqual(W);
  takeTurn(board, [1, 3]);
  expect(tile(board, [1, 3])).toEqual(B);
});

test('tile() returns the tile that it is asked to.', () => {
  const board = createBoard([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);
  expect(tile(board, [5, 5])).toEqual(E);
});

test('takeTurn() flips tiles between it and another.', () => {
  const board = createBoard([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);
  takeTurn(board, [1, 2]);
  expect(board.tiles).toEqual([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, B, B, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);
});

test('getAnnotatedBoard() also shows where the player can next place a tile.', () => {
  const board = createBoard([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [E, E, B, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);
  const annotatedBoard = getAnnotatedBoard(board);
  expect(annotatedBoard.tiles).toEqual([
    [E, E, E, E, E, E],
    [E, P, P, P, P, E],
    [E, P, W, B, P, E],
    [E, P, B, W, P, E],
    [E, P, P, P, P, E],
    [E, E, E, E, E, E]
  ]);
});

test('takeTurn() flips all tiles inbetween two identical tiles instead of just one.', () => {
  const board = {
    playerTurn: W,
    tiles: [
      [E, E, E, E, E, E],
      [E, E, E, E, E, E],
      [E, E, W, B, E, E],
      [E, B, B, W, E, E],
      [E, E, E, E, E, E],
      [E, E, E, E, E, E]
    ]
  };
  takeTurn(board, [0, 3]);
  expect(board.tiles).toEqual([
    [E, E, E, E, E, E],
    [E, E, E, E, E, E],
    [E, E, W, B, E, E],
    [W, W, W, W, E, E],
    [E, E, E, E, E, E],
    [E, E, E, E, E, E]
  ]);
});
