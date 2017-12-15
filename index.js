// Discord Bot API
var Discord = require('discord.js');
// Custom Made Utility module
var utils = require('./utils');
// Custom Made modules
var commands = require('./commands');
// Express
var express = require('express');
// New Express Instance
var app = express();
// Keeping the client awake 24/7 with http
var http = require('http').Server(app);

// Creating a new client.
var client = new Discord.Client();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var blocked = [];

http.listen(3088, function(){
  console.log('listening on *:3088');
});

client.login("MzkwNTc4NTE0NzI3OTI3ODEw.DRMKNQ.iJSdzQhMAFYBlgDnYFYxEM4xm34");

client.on('ready', function(event) {
	console.log('Logged in as %s', client.username);
});

client.on('message', function(message) {
  //if(message.author.username !== client.user.username){
		console.log((message.guild === null ? "DM-Channel" : message.guild.name) + "/" + message.channel.name + "|" + message.author.username + " : " + message.content);
    for (var cmd in commands) {
      if (message.content.search(cmd) === 0) {
				if(!blocked.includes(message.author.tag)){
					var args = message.content.replace(cmd, "").trim().split(" ");
					commands[cmd](args, message);
				} else {
					message.channel.send("You are blocked from using the bot.");
				}
			}
    }
  //}
}).catch(function(err){
	console.log(err);
});