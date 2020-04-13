const { uuid } = require('uuidv4')

class GameListener {

  constructor () {
    this._games = []
  }

  addGame (game) {
    const id = uuid()
    this._games.push([id, game])
    return id
  }

  getGames () {
    return this._games.map(([uuid,]) => uuid)
  }

  getGame (find) {
    return this._games.find(([uuid]) => uuid === find)
  }

  removeGame (id) {
    this._games = this._games.filter(([uuid]) => uuid !== id)
  }

}

module.exports = new GameListener()