import Game from './../src/game'

const game = new Game()
game.addPlayer('Sébastien')
game.addPlayer('Targos')

test('Create a game with only 2 user when you give 3', () => {
  expect(game.players.length).toBe(2)
})

test('Add a test when you add a player', () => {
  const testGame = new Game()
  testGame.addPlayer('Sébastien')
  expect(testGame.players.length).toBe(1)
  testGame.addPlayer('Targos')
  expect(testGame.players.length).toBe(2)
})

test('Cannot add any player more', () => {
  const testGame = new Game()
  testGame.addPlayer('Sébastien')
  testGame.addPlayer('Targos')

  expect(testGame.players.length).toBe(2)
  expect(() => game.addPlayer('Titi')).toThrow('Cannot add a player.')
})

test('Create a empty board [filled with 0]', () => {
  expect(game.board).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
})

test('test when you try to place a pawn in a bad position (line)', () => {
  expect(() => game.move(10, 0, 1)).toThrow('You cannot do that. The board is only 3x3')
})

test('test when you try to place a pawn in a bad position (column)', () => {
  expect(() => game.move(0, 10, 1)).toThrow('You cannot do that. The board is only 3x3')
})

test('test when you set a pawn on 0,0 [pawn: 1] and throw an error if you re-set in the same position', () => {
  game.move(0, 0, 1)
  expect(game.board[0][0]).toBe(1)
  expect(() => game.move(0, 0, 2)).toThrow('You cannot do that. The board in 0, 0 already contains a value.')
})

test('test when you isWin a game diag 1', () => {
  const board = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]
  expect(game.isWin(board)).toBeTruthy()
})

test('test when you isWin a game diag 2', () => {
  const board = [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0]
  ]
  expect(game.isWin(board)).toBeTruthy()
})

test('test when you isWin a game line 1', () => {
  const board = [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0]
  ]
  expect(game.isWin(board)).toBeTruthy()
})

test('test when you isWin a game line 2', () => {
  const board = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ]
  expect(game.isWin(board)).toBeTruthy()
})

test('test when you isWin a game line 3', () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1]
  ]
  expect(game.isWin(board)).toBeTruthy()
})

test('test when you isWin a game column 1', () => {
  const board = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0]
  ]
  expect(game.isWin(board)).toBeTruthy()
})

test('test when you isWin a game column 2', () => {
  const board = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ]
  expect(game.isWin(board)).toBeTruthy()
})

test('test when you isWin a game column 3', () => {
  const board = [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1]
  ]
  expect(game.isWin(board)).toBeTruthy()
})

test('test when you didn\'t isWin', () => {
  const board = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]
  expect(game.isWin(board)).toBeFalsy()
})

test('test to didn\'t isWin with the actual board', () => {
  expect(game.isWin()).toBeFalsy()
})

test('test when you reset the board', () => {
  game.move(1, 0, 1)
  expect(game.board[1][0]).toBe(1)
  game.reset()
  expect(game.board).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
})