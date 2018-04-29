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

// For parsing application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));

// For parsing application/json
app.use(bodyParser.json());


//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('you did it');
  console.log('A GET request was made');
});


//====GET GAMES===//
app.get('/api/games', function(req, res) {
	// Need to find to take arguments
	console.log(req);
  	Game.find({team1: "Mexico"}).then(eachOne => {
    	res.json(eachOne);
    })
  // console.log('a get request was made and it looked at the db');
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
	// console.log('req',res);
	var text = req.body.text;
	text = text.split(" ");
	var team1 = text[0];
	var score1 = parseInt(text[1]);
	var team2 = text[2];
	var score2 = parseInt(text[3]);
	var tournament = text[4];
	var type = text[5];

	console.log(team1);
	console.log(score1);
	console.log(team2);
	console.log(score2);
	console.log(tournament);
	console.log(type);


	var response = "A new score has been added!\n\n"

	if (score1 > score2) {
		response = response + team1 + " beat " + team2 + " " + score1 + "-" + score2 + "!";
	}
	else if (score1 < score2) {
		response = response + team2 + " beat " + team1 + " " + score2 + "-" + score1 + "!";
	}
	else {
		response = response + team1 + " and " + team2 + " tied!";
	}

	axios.post('https://hooks.slack.com/services/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', 
		{"text":response});
});



// Body sent like this from Slack:

// token=gIkuvaNzQIHg97ATvDxqgjtO
// team_id=T0001
// team_domain=example
// enterprise_id=E0001
// enterprise_name=Globular%20Construct%20Inc
// channel_id=C2147483705
// channel_name=test
// user_id=U2147483697
// user_name=Steve
// command=/addscore
// text=Mexico 2 Mozambique 2 co-rec group
// response_url=https://hooks.slack.com/commands/1234/5678
// trigger_id=13345224609.738474920.8088930838d88f008e0

















//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		console.log('Connection established to', url);
	}
});

app.listen(process.env.PORT || 4000);
console.log('starting the application');