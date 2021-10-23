const {prefix} = require('../Configs/config.json');
const channels = require('../Configs/Channels.json')
const Discord = require('discord.js');

module.exports = {
	name: 'absent',
    example:'absent <dd/mm> <Reason>',
    description: 'Lets the group know that a user is absent and why',
	async execute(Bot, message, args) {

            message.delete({timeout: 500});
            let reasonText ="";

            let absentDate = "";

            if(args !== undefined){
            
                try {

                    if(args[0].includes("/")){
                        let tempdate = args[0].split("/");
                        
                        absentDate = `${tempdate[0]}. ${convertMonth(tempdate[1])}`;
                        reasonText = generateReason(args, 1);
                        
                    }
                    else{
                        let date = new Date();
                        let currentMonth = date.getMonth()+1;
                        absentDate = `${date.getDate()}. ${convertMonth(currentMonth.toString())}`;
                        reasonText = generateReason(args, 0);
        
                    }

                    let textChan = Bot.channels.cache.get(channels.AbsentChat);
                
                    const embed = new Discord.MessageEmbed().setTitle('Absence Register')
                    .addFields(
                    { name: `Group Member`, value: `@${message.author.username}`},
                    { name: `Date`, value:`${absentDate}`},
                    { name: `Reason`, value: `${reasonText}`})
                    .setColor('#f44336');
                    if (args[0] != "test"){
                        textChan.send("@everyone");
                        textChan.send(embed).then(msg =>{msg.react('😟')});
                    }
                    else{
                        textChan.send(embed).then(msg =>{msg.react('😟')});  
                    }   
                        
                } catch (error) {
                        
                    console.log(error.message);
                    message.reply('Im sorry, something went wrong.. Please try again').then(msg =>{msg.delete({timeout: 3000})});
                }
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

function convertMonth(input){

    let month ="";

    switch (input) {
        case "1":
                month = "Januar";
            break;
        case "2":
                month = "Februar";
            break;
        case "3":
                month = "Marts";
            break;
        case "4":
                month = "April";
            break;
        case "5":
                month = "Maj";
            break;
        case "6":
                month = "Juni";
            break;
        case "7":
                month = "Juli";
            break;
        case "8":
                month = "August";
            break;
        case "9":
                month = "September";
            break;
        case "10":
                month = "Oktober";
            break;
        case "11":
                month = "November";
            break;
        case "12":
                month = "December";
            break;
        default: 
                month = "?"
            break;
    }
    return month;

}