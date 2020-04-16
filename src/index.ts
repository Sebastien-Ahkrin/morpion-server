import fastifyImport from 'fastify'

import GameManager from './listener'
import Game from './game'

const fastify = fastifyImport({ logger: true })

/**
 * @api {get} /games/create/:playerOne Create a room to start playing
 * @apiName CreateGame
 * @apiGroup Game
 *
 * @apiParam {String} playerOne Name of the first user.
 *
 * @apiSuccess {String} status room created.
 * @apiSuccess {String} uuid The id of this room.
 */
fastify.get('/games/create', (request, response) => {
  const { playerOne } = request.params
  
  const game = new Game()
  game.addPlayer(playerOne)

  const id = GameManager.addGame(game)
  response.send({ status: 'room created', uuid: id }).status(200)
})

/**
 * @api {get} /games/:uuid/join/:play Join a room
 * @apiName JoinGame
 * @apiGroup Game
 *
 * @apiParam {String} player Name of the user.
 *
 * @apiSuccess {String} status Player added.
 * @apiError Error The <code>uuid</code> of the Game was not found.
 */
fastify.get('/games/:uuid/join/:player', (request, response) => {
  const { uuid, player } = request.params
  const room = GameManager.getGameById(uuid)

  if (room === undefined) {
    response.send({ status: 'room not found' }).status(404)
    return
  }

  const { game } = room
  game.addPlayer(player)

  response.send({ status: 'Player added' }).status(200)
})

/**
 * @api {get} /games Display every rooms
 * @apiName ListGame
 * @apiGroup Game
 *
 * @apiSuccess {Array} A list of every rooms.
 */
fastify.get('/games', (_, response) => {
  response.send(GameManager.games).status(200)
})

/**
 * @api {get} /games/:uuid/:line/:column/:pawn Action to a room
 * @apiName ActionGame
 * @apiGroup Game
 *
 * @apiParam {String} uuid The id of the room.
 * @apiParam {String} line The line of the array
 * @apiParam {String} column The column of the array
 * @apiParam {String} pawn The pawn to place [0 = none, 1 = playerOne, 2 = playerTwo]
 *
 * @apiError Error The <code>uuid</code> of the Game was not found.
 */
fastify.get('/games/:uuid/:line/:column/:pawn', (request, response) => {
  const { uuid, line, column, pawn } = request.params
  const room = GameManager.getGameById(uuid)

  if (room === undefined) {
    response.send({ status: 'room not found' }).status(404)
    return
  }

  const { game } = room
  game.move(line, column, pawn)
  response.status(200)
})

/**
 * @api {get} /games/:uuid Get the board
 * @apiName BoardGame
 * @apiGroup Game
 *
 * @apiParam {String} uuid The id of the room.
 * 
 * @apiSuccess {Array} the board [[0,0,0], [0,0,0], [0,0,0]].
 * @apiError Error The <code>uuid</code> of the Game was not found.
 */
fastify.get('/games/:uuid', (request, response) => {
  const { uuid } = request.params
  const room = GameManager.getGameById(uuid)

  if (room === undefined) {
    response.send({ status: 'room not found' }).status(404)
    return
  }

  const { game } = room
  response.send({ status: game }).status(200)
})

/**
 * @api {delete} /games/:uuid Remove a room
 * @apiName RemoveGame
 * @apiGroup Game
 *
 * @apiParam {String} uuid The id of the room.
 * 
 * @apiSuccess {String} success
 * @apiError Error The <code>uuid</code> of the Game was not found.
 */
fastify.delete('/games/:uuid', (request, response) => {
  const { uuid } = request.params
  const room = GameManager.getGameById(uuid)

  if (room === undefined) {
    response.send({ status: 'room not found' }).status(404)
    return
  }

  GameManager.removeGameById(uuid)
  response.send({ status: 'success' }).send(200)
})

/**
 * @api {get} /games/:uuid/win Know if a player win
 * @apiName WinGame
 * @apiGroup Game
 *
 * @apiParam {String} uuid The id of the room.
 * 
 * @apiSuccess {Boolean} status if a player win.
 * @apiError Error The <code>uuid</code> of the Game was not found.
 */
fastify.get('/games/:uuid/win', (request, response) => {
  const { uuid } = request.params
  const room = GameManager.getGameById(uuid)

  if (room === undefined) {
    response.send({ status: 'room not found' }).status(404)
    return
  }

  const { game } = room
  response.send({ status: game.isWin() }).status(200)
})

async function start () {
  try {
    await fastify.listen(8080)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()