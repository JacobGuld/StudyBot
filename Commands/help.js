const {prefix} = require('../Configs/config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
    description: 'Displays help menu',
	async execute(Bot, message, args) {
        

		const embed = new Discord.MessageEmbed().setTitle('StudyBot Command List')
            .addFields(
                { name: `${prefix}edit New_chat_name`, value: "- Renames the current voicechannel" },
                { name: `${prefix}vote Option_1:Option_2: etc..`, value: "- Creates a poll with upto 10 options (Tags @everyone)"},
            )
            .setColor(0x9b59b6)
            .setFooter("Made by GULD");
            message.delete({timeout: 500});
            message.channel.send(embed).then(msg => {msg.delete({timeout: 30000}) });
            return;
	},
};
