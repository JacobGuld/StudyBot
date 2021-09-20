const {prefix} = require('../Configs/config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
    description: 'Displays help menu',
	async execute(Bot, message, args) {
        
        if(args == undefined){
            const embed = new Discord.MessageEmbed().setTitle('StudyBot Command List')
            .addFields(
                { name: `${prefix}edit [New_chat_name]`, value: "- Renames the current voicechannel" },
                { name: `${prefix}vote [TOPIC] : [OPTION_1] : [OPTION_2] : etc..`, value: "- Creates a poll with upto 10 options (Tags @everyone)"},
                { name: `${prefix}absent [(OPTIONAL) DATE] [REASON]`, value: "- Registers absence" },
            )
            .setColor(0x9b59b6)
            .setFooter("Made by GULD");
            message.delete({timeout: 500});
            message.channel.send(embed).then(msg => {msg.delete({timeout: 30000}) });
            return;
        }
        else{
            switch (args[0]) {
                case "edit": editHelpMenu(message);
                    
                    break;
                case "vote": voteHelpMenu(message);

                    break;
                case "absent":absentHelpMenu(message);

                    break;
                default:
                    message.channel.send(`Sorry, cant help you with: ${args[0]}`).then(msg => {msg.delete({timeout: 5000}) });
                    break;
            }
        }
	},
};


function editHelpMenu(){

    const editEmbed = new Discord.MessageEmbed().setTitle('Edit Help Menu')
            .addFields(
                { name: `${prefix}edit [New_chat_name]`, value: "- Renames the current voicechannel" },
                { name: `[New_chat_name]`, value: "- The name of the new channel"},
            )
            .setColor(0x9b59b6);

            message.delete({timeout: 500});
            message.channel.send(editEmbed).then(msg => {msg.delete({timeout: 30000}) });
            return;

}

function voteHelpMenu(){

    const voteEmbed = new Discord.MessageEmbed().setTitle('Vote Help Menu')
            .addFields(
                { name: `${prefix}vote [TOPIC] : [OPTION_1] : [OPTION_2] : etc..`, value: "- Creates a poll with upto 10 options (Tags @everyone)"},
                { name: `[TOPIC]`, value: "- The topic of the poll"},
                { name: `[OPTION_(X)]`, value: "- The poll options that people will be able to react to"},
            )
            .setColor(0x9b59b6);

            message.delete({timeout: 500});
            message.channel.send(voteEmbed).then(msg => {msg.delete({timeout: 30000}) });
            return;
}

function absentHelpMenu(){

    const absentEmbed = new Discord.MessageEmbed().setTitle('Vote Help Menu')
            .addFields(
                { name: `${prefix}absent [(OPTIONAL) DATE] [REASON]`, value: "- Registers absence"},
                { name: `[DATE]`, value: "- (Optional) The day of the absence. Default: today"},
                { name: `[REASON]]`, value: "- A reason for absence"},
            )
            .setColor(0x9b59b6);

            message.delete({timeout: 500});
            message.channel.send(absentEmbed).then(msg => {msg.delete({timeout: 30000}) });
            return;

}