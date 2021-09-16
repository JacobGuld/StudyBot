const {prefix} = require('../Configs/config.json');
const channels = require('../Configs/Channels.json')
const Discord = require('discord.js');

module.exports = {
	name: 'absent',
    description: 'Lets the group know that a user is absent and why',
	async execute(Bot, message, args) {

            message.delete({timeout: 500});
            let reasonText ="";

            if(args !== undefined){

                for(i=0; i<args.length; i++){

                    reasonText += args[i] + " ";
                }

                try {

                    let textChan = Bot.channels.cache.get(channels.AbsentChat);
                    textChan.send(`@everyone : @${message.author.username} is absent today! Reason: ${reasonText}`).then(msg =>{msg.react('😟')});
                    
                } catch (error) {
                    console.log(error);
                }
            }
            else{
                message.reply('Please give me a reason for youre absent').then(msg =>{msg.delete({timeout: 2000})});
            }

            return;
	},
};