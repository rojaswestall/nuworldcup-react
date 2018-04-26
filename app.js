const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Game = require('./models/game.js')
const app = express();
const url = 'mongodb://nu-worldcupadmin:2018@ds257579.mlab.com:57579/nu-worldcup';
const axios = require('axios');

// For cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('you did it');
  console.log('A GET request was made');
});


//====GET GAMES===//
app.get('/api/games', function(req, res) {
// Need to find to take arguments
  Game.find({team: "Mexico"}).then(eachOne => {
    res.json(eachOne);
    })
  console.log('a get request was made and it looked at the db')
 })

//====POST NEW GAME===//
app.post('/api/games', function(req, res) {
	console.log('req',req);
	console.log('res', res);
	Game.create({
		score: req.body.score,
		teams: req.body.teams,
	}).then(game => {
		res.json(game)
	});
});

app.post('/slack/addscore', function(req, res) {
	// console.log('req',req.body);
	console.log('res', res.body);
	axios.post('https://hooks.slack.com/services/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', 
		{"text":"A new score has been added!"});
});


//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		console.log('Connection established to', url);
	}
});

app.listen(process.env.PORT || 3000);
console.log('starting the application');