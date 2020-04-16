import { uuid } from 'uuidv4'

export interface Board extends Array<Array<number>> {}

export const Pawn = {
  none: 0,
  red: 1,
  blue: 2
}

export const defaultBoard: Board = [
  [Pawn.none, Pawn.none, Pawn.none],
  [Pawn.none, Pawn.none, Pawn.none],
  [Pawn.none, Pawn.none, Pawn.none]
]

export interface Player {
  name: string,
  id: string
}

export default class Game {

  public players: Player[] = []
  public board: Board = defaultBoard.slice()

  /**
   * Push a player in the game (maximum 2)
   * @param player the player to push in the game (see {@link Player})
   * @throws Error error when you can't add any player
   */
  public addPlayer (player: string): string | never {
    if (this.players.length >= 2) {
      throw new Error(`Cannot add a player.`)
    }

    this.players.push({
      name: player,
      uuid: uuid()
    } as unknown as Player)

    return uuid()
  }

  /**
   * Place a pawn in the board
   * @param line line to place the pawn
   * @param column column to place the pawn
   * @param pawn pawn to place {@see Pawn}
   */
  public move (line: number, column: number, pawn: number): void | never {
    if (line > this.board.length - 1 || column > this.board[0].length - 1) {
      throw new Error(`You cannot do that. The board is only 3x3`)
    }
    if (this.board[line][column] !== 0) {
      throw new Error(`You cannot do that. The board in ${line}, ${column} already contains a value.`)
    }

    this.board[line][column] = pawn
  }

  /**
   * Check if a player win in the board
   * @param array array to check if a player win
   */
  public isWin (array: Board = this.board): boolean {
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

  public reset (): void {

    console.log(defaultBoard)

    this.board = [
      [Pawn.none, Pawn.none, Pawn.none],
      [Pawn.none, Pawn.none, Pawn.none],
      [Pawn.none, Pawn.none, Pawn.none]
    ]
  }

}