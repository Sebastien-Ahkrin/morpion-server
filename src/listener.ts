import { uuid } from 'uuidv4'

export interface Game {
  uuid: string,
  game: any
}

class GameManager {

  public games: Array<Game> = []

  public addGame (party: any): Game {
    const game: Game = {
      uuid: uuid(),
      game: party
    }
    this.games.push(game)
    return game
  }

  public getGameById (uuid: string): Game | undefined {
    return this.games.find((game: Game) => game.uuid === uuid)
  }

  public removeGameById (uuid: string): void {
    this.games = this.games.filter((filter: Game) => filter.uuid !== uuid)
  }

}

export default new GameManager() 