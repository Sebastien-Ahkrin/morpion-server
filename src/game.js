const pawn = {
  none: 0,
  red: 1,
  blue: 2
}

/* 3x3 Board */
const defaultBoard = [
  [pawn.none, pawn.none, pawn.none], // Top stage
  [pawn.none, pawn.none, pawn.none], // Middle stage
  [pawn.none, pawn.none, pawn.none]  // Bottom stage
]

class Game {

  constructor (...players) {
    this._players = players.slice(0, 2)
    this._board = defaultBoard.slice()
  }

  addPlayer (player) {
    if (this._players.filter(name => name !== '').length === 1) {
      this._players.push(player)
    } else {
      throw new Error('Cannot add a player. You\'r already two')
    }
  }

  move (line, column, pawn) {
    // Checl the size of the board
    if (line > defaultBoard.length - 1 || column > defaultBoard[0].length - 1) {
      throw new Error('You cannot do that. The board is only 3x3.')
    }

    // Check if a pawn already exist
    if (this._board[line][column] !== 0) {
      throw new Error(`You cannot do that. The board in ${line}, ${column} already contains a value.`)
    }

    this._board[line][column] = pawn
  }

  win (array = this._board) {
    return ( 
      (array[0][0] !== 0 && array[0][0] === array[0][1] && array[0][0] === array[0][2]) || 
      (array[1][0] !== 0 && array[1][0] === array[1][1] && array[1][0] === array[1][2]) || 
      (array[2][0] !== 0 && array[2][0] === array[2][1] && array[2][0] === array[2][2]) || 
      (array[0][0] !== 0 && array[0][0] === array[1][0] && array[0][0] === array[2][0]) ||
      (array[0][1] !== 0 && array[0][1] === array[1][1] && array[0][1] === array[2][1]) ||
      (array[0][2] !== 0 && array[0][2] === array[1][2] && array[0][2] === array[2][2]) ||
      (array[0][0] !== 0 && array[0][0] === array[1][1] && array[0][0] === array[2][2]) ||
      (array[0][2] !== 0 && array[0][2] === array[1][1] && array[0][2] === array[2][0])
    )
  }

  reset () {
    this._board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  }

}

module.exports = Game