const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Game = require('./models/game.js')
const app = express();
const url = 'mongodb://nu-worldcupadmin:2018@ds257579.mlab.com:57579/nu-worldcup';

//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('you did it');
  console.log('A GET request was made');
});


//====GET GAMES===//
app.get('/api/games', function(req, res) {
  Game.find({}).then(eachOne => {
    res.json(eachOne);
    })
  console.log('a get request was made and it looked at the db')
  })

//====POST NEW GAME===//
app.post('/api/games', function(req, res) {
  Game.create({
    score: req.body.score,
    teams: req.body.teams,
  }).then(game => {
    res.json(game)
  });
});

//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		console.log('Connection established to', url);
	}
});

app.listen(80);
console.log('starting the application');