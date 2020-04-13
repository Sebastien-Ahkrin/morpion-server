const Game = require('./../src/game')
const game = new Game('Sébastien', 'Targos', 'Fraxken')

test('Create a game with only 2 user when you give 3', () => {
  expect(game._players.length).toBe(2)
})

test('Add a test when you add a player', () => {
  const testGame = new Game('Sébastien')
  expect(testGame._players.length).toBe(1)
  testGame.addPlayer('Targos')
  expect(testGame._players.length).toBe(2)
})

test('Cannot add any player more', () => {
  const testGame = new Game('Sébastien', 'Targos')
  expect(testGame._players.length).toBe(2)
  expect(() => game.addPlayer('Titi')).toThrow('Cannot add a player. You\'r already two')
})

test('Create a empty board [filled with 0]', () => {
  expect(game._board).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
})

test('test when you try to place a pawn in a bad position (line)', () => {
  expect(() => game.move(10, 0, 1)).toThrow('You cannot do that. The board is only 3x3.')
})

test('test when you try to place a pawn in a bad position (column)', () => {
  expect(() => game.move(0, 10, 1)).toThrow('You cannot do that. The board is only 3x3.')
})

test('test when you set a pawn on 0,0 [pawn: 1] and throw an error if you re-set in the same position', () => {
  game.move(0, 0, 1)
  expect(game._board[0][0]).toBe(1)
  expect(() => game.move(0, 0, 2)).toThrow('You cannot do that. The board in 0, 0 already contains a value.')
})

test('test when you win a game diag 1', () => {
  const board = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]
  expect(game.win(board)).toBeTruthy()
})

test('test when you win a game diag 2', () => {
  const board = [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0]
  ]
  expect(game.win(board)).toBeTruthy()
})

test('test when you win a game line 1', () => {
  const board = [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0]
  ]
  expect(game.win(board)).toBeTruthy()
})

test('test when you win a game line 2', () => {
  const board = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ]
  expect(game.win(board)).toBeTruthy()
})

test('test when you win a game line 3', () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1]
  ]
  expect(game.win(board)).toBeTruthy()
})

test('test when you win a game column 1', () => {
  const board = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0]
  ]
  expect(game.win(board)).toBeTruthy()
})

test('test when you win a game column 2', () => {
  const board = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ]
  expect(game.win(board)).toBeTruthy()
})

test('test when you win a game column 3', () => {
  const board = [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1]
  ]
  expect(game.win(board)).toBeTruthy()
})

test('test when you didn\'t win', () => {
  const board = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]
  expect(game.win(board)).toBeFalsy()
})

test('test to didn\'t win with the actual board', () => {
  expect(game.win()).toBeFalsy()
})

test('test when you reset the board', () => {
  game.move(1, 0, 1)
  expect(game._board[1][0]).toBe(1)
  game.reset()
  expect(game._board).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
})