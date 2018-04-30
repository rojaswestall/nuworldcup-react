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


//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('you did it');
  console.log('A GET request was made');
});


//====GET GROUP STAGE GAMES===//
app.get('/api/games', function(req, res) {
	var params = req.query;
	var team1 = params.team1;
	var team2 = params.team2;
	var tournament = params.tournament;

  	Game.findOne({ $or:[{'team1': team1, 'team2': team2, 'tournament': tournament}, {'team1': team2, 'team2': team1, 'tournament': tournament}]}).then(game => {
    	res.json(game);
    })
 });

//====POST NEW GAME===//
app.post('/api/games', function(req, res) {
	Game.create({
		score: req.body.score,
		teams: req.body.teams,
	}).then(game => {
		res.json(game)
	});
});

app.post('/slack/updatepoints', function (req, res) {

	axios.post('https://hooks.slack.com/services/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', 
						{"text":"Score was updated for a team to be ?"});
});

app.post('/slack/addscore', function(req, res) {
	// console.log('req',res);
	var params = req.body.text;
	text = params.split(" ");
	var team1 = text[0];
	var score1 = parseInt(text[1]);
	var team2 = text[2];
	var score2 = parseInt(text[3]);
	var tournament = text[4];
	var type = text[5];

	// Need to put this into the database now

	Game.findOne({ $or:[ {'team1':team1, 'team2': team2, 'tournament': tournament, 'type': type}, {'team1':team2, 'team2': team1, 'tournament': tournament, 'type': type} ]}, (err, game) => {
		if (err) {
			console.log("Error in finding Game", err)
		}
		if (game) {
			if (game.team1 == team1) {
				game.score1 = score1;
				game.score2 = score2;
			}
			else {
				game.score1 = score2;
				game.score2 = score1;
			}
			game.save((err) => {
				if (err) {
			  		console.log("Error updating the game with the new scores from slack", err);
			  	}
			  	else {
			  		// If all goes well respond with below. Otherwise respond saying there was an error and return what they put in
					var response = "A new score has been added!\n\n";
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
			  	}
			});
		}
		else {
			// If all goes well respond with below. Otherwise respond saying there was an error and return what they put in
			var response = "There was an error adding the score to the website :( Please check what you sent:\n\n";
			response = response + params;
			axios.post('https://hooks.slack.com/services/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', 
				{"text":response});
		}
	});
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