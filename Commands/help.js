const {prefix} = require('../Configs/config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
    description: 'Displays help menu',
	async execute(Bot, message, args) {
        

		const embed = new Discord.MessageEmbed().setTitle('Command List')
            .addFields(
                { name: "!new [Chat name]", value: "- Creates new voicechannel" },
                { name: "!edit [New chat name]", value: "- Renames the current voicechannel" },
                { name: "!vote [Option 1]:[Option 2]: etc..", value: "- Creates a poll with upto 10 options (Tags @everyone)"},
                { name: "!remind [xx.yy] [message]", value: " - Reminds everyone about [Message] at [xx.yy]"},
            )
            .setColor(0x9b59b6)
            .setFooter("Made by Jacob Guldhammer");
            message.delete({timeout: 500});
            message.reply(embed).then(msg => {msg.delete({timeout: 30000}) });
            return;
	},
};
