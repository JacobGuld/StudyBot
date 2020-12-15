const Discord = require('discord.js'); //requires discord.js
const config = require('./Configs/config.json');
const roles = require('./Configs/roles.json');
const channels = require('./Configs/Channels.json');
const Bot = new Discord.Client(); //Creates bot as a new client
const fs = require('fs'); //requires fs 
const voiceChat = "voice";


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


Bot.login(process.env.token); //logs in the bot - with the correct token.

