const Discord = require('discord.js'); //requires discord.js
const config = require('./Configs/config.json');
const Bot = new Discord.Client(); //Creates bot as a new client
require("dotenv").config();
const fs = require('fs'); //requires fs 



fs.readdir('./Events', (err, files) => {
	files.forEach(file => {
		const eventHandler = require(`./Events/${file}`);
		const eventName = file.split(".")[0]; // File name = eventName
		Bot.on(eventName, (...args) => eventHandler(Bot, ...args));
	});
});

//Logs when the bot ready and running


Bot.commands = new Discord.Collection();

const files = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
for(const file of files){
    const cmd = require(`./Commands/${file}`);
    Bot.commands.set(cmd.name, cmd);
}


Bot.login(process.env.TOKEN); //logs in the bot - with the correct token.

