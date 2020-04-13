define({ "api": [
  {
    "type": "get",
    "url": "/games/:uuid/:line/:column/:pawn",
    "title": "Action to a room",
    "name": "ActionGame",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>The id of the room.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "line",
            "description": "<p>The line of the array</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "column",
            "description": "<p>The column of the array</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pawn",
            "description": "<p>The pawn to place [0 = none, 1 = playerOne, 2 = playerTwo]</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>The <code>uuid</code> of the Game was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games/:uuid",
    "title": "Get the board",
    "name": "BoardGame",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>The id of the room.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "the",
            "description": "<p>board [[0,0,0], [0,0,0], [0,0,0]].</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>The <code>uuid</code> of the Game was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games/create/:playerOne",
    "title": "Create a room to start playing",
    "name": "CreateGame",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "playerOne",
            "description": "<p>Name of the first user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>room created.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>The id of this room.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games/:uuid/join/:play",
    "title": "Join a room",
    "name": "JoinGame",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "player",
            "description": "<p>Name of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Player added.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>The <code>uuid</code> of the Game was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games",
    "title": "Display every rooms",
    "name": "ListGame",
    "group": "Game",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "A",
            "description": "<p>list of every rooms.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "Game"
  },
  {
    "type": "delete",
    "url": "/games/:uuid",
    "title": "Remove a room",
    "name": "RemoveGame",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>The id of the room.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>The <code>uuid</code> of the Game was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games/:uuid/win",
    "title": "Know if a player win",
    "name": "WinGame",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>The id of the room.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>if a player win.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>The <code>uuid</code> of the Game was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "Game"
  }
] });
