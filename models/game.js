const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const gameSchema = new Schema({
  score: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  teams: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;