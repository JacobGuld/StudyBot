const {prefix} = require('../Configs/config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
    description: 'Displays help menu',
	async execute(Bot, message, args) {
        

		const embed = new Discord.MessageEmbed().setTitle('StudyBot Command List')
            .addFields(
                { name: `${prefix}edit [NEW CHATNAME]`, value: "- Renames the current voicechannel" },
                { name: `${prefix}vote [OPTION_1]:[OPTION_2]:etc..`, value: "- Creates a poll with upto 10 options (Tags @everyone)"},
                {name: `${prefix}absent (optional)[DATE] [REASON]`, value: `- Lets the group know when (default today) and why youre absent.`}
            )
            .setColor(0x9b59b6)
            .setFooter("Made by GULD");
            message.delete({timeout: 500});
            message.channel.send(embed).then(msg => {msg.delete({timeout: 30000}) });
            return;
	},
};
