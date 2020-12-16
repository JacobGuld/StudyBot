const {prefix} = require('../Configs/config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
    description: 'Displays help menu',
	async execute(Bot, message, args) {
        

		const embed = new Discord.MessageEmbed().setTitle('Command List')
            .addFields(
                { name: "#new Chat_name", value: "- Creates new voicechannel" },
                { name: "#edit New_chat_name", value: "- Renames the current voicechannel" },
                { name: "#vote Option_1:Option_2: etc..", value: "- Creates a poll with upto 10 options (Tags @everyone)"},
                { name: "#remind xx.yy message", value: " - Reminds everyone about [Message] at [xx.yy]"},
            )
            .setColor(0x9b59b6)
            .setFooter("Made by Jacob Guldhammer");
            message.delete({timeout: 500});
            message.reply(embed).then(msg => {msg.delete({timeout: 30000}) });
            return;
	},
};
