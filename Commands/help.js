const {prefix} = require('../Configs/config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
    Title:'Help',
    description: 'Displays help menu',
	async execute(Bot, message, args) {
        

		const embed = new Discord.MessageEmbed().setTitle('StudyBot Command List')
            .setColor(0x9b59b6)
            .setFooter("Made by GULD");

            let commands = Bot.commands;

            commands.forEach(cmd => {

                if(cmd.name != "help"){
                    embed.addFields({name:`${cmd.Title}`, value: `${prefix}${cmd.example} \n - ${cmd.description}`});
                }

            });
            
            message.channel.send(embed).then(msg => {msg.delete({timeout: 30000}) });
            return;
	},
};
