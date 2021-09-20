const {prefix} = require('../Configs/config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'absent',
    description: 'Lets the group know that a user is absent and why',
	async execute(Bot, message, args) {

            message.delete({timeout: 500});
            let reasonText ="";

            if(args !== undefined){
                let channel = message.guild.channels.cache.find(channel => channel.name === "📮absent-register"); 
                if(args[0].startsWith(":")){

                    let date = args[0].split(":");

                    let absentDate = date;
                    
                    reasonText = GenerateReason(1, args);

                    sendMessageToChannel(`@everyone : @${message.author.username} will be absent on ${absentDate} Reason: ${reasonText}`, channel);
                    
                }
                else{

                    reasonText = GenerateReason(0, args);
                    
                    sendMessageToChannel(`@everyone : @${message.author.username} is absent today! Reason: ${reasonText}`, channel);

                }
            }
            else{
                message.reply('Please give me a reason for youre absent').then(msg =>{msg.delete({timeout: 2000})});
            }

            return;
	},
};

function GenerateReason(i, args){
    let text = "";
    for(i; i < args.length; i++){

        text += args[i] + " ";
    }
    return text;
}

function sendMessageToChannel(message, channel){

    try {
        
        //let textChan = Bot.channels.cache.get(channels.AbsentChat);
        channel.send(message).then(msg =>{msg.react('😟')});
        
    } catch (error) {
        console.log(error);
    }

}