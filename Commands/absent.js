const {prefix} = require('../Configs/config.json');
const channels = require('../Configs/Channels.json')
const Discord = require('discord.js');

module.exports = {
	name: 'absent',
    description: 'Lets the group know that a user is absent and why',
	async execute(Bot, message, args) {

            message.delete({timeout: 500});
            let reasonText ="";

            let absentDate = "";

            if(args !== undefined){

            
                if(args[0].includes("/")){

                    absentDate = ` will be absent on ${args[0]}.`;
                    reasonText = generateReason(args, 1);
                    
                }
                else{
                    absentDate = " is absent today!";
                    reasonText = generateReason(args, 0);
    
                }
                
                try {

                    let textChan = Bot.channels.cache.get(channels.AbsentChat);

                    const embed = new Discord.MessageEmbed().setTitle('Absence Register')
                    .addFields(
                    { name: `Group Member`, value: `@${message.author.username}`},
                    { name: `Date`, value:`${absentDate}`},
                    { name: `Reason`, value: `${reasonText}`})
                    .setColor('#f44336');
                    textChan.send("@everyone");
                    textChan.send(embed).then(msg =>{msg.react('😟')});
                    
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

function generateReason(input, startPoint){
    let tempVariable ="";

    for(i=startPoint; i<input.length; i++){

        tempVariable += input[i] + " ";
    }

    return tempVariable;
}