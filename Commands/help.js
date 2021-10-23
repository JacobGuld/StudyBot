const {prefix} = require('../Configs/config.json');
const Discord = require('discord.js');

const fs = require('fs');

module.exports = {
	name: 'help',
    description: 'Displays help menu',
	async execute(Bot, message, args) {
        
        message.delete({timeout: 100});

		const embed = new Discord.MessageEmbed().setTitle('StudyBot Command List')
            .setColor(0x9b59b6)
            .setFooter("Made by GULD");

            let commands = Bot.commands;

            commands.forEach(cmd => {

                if(cmd.name != "help"){
                    embed.addFields({name:`${prefix}${cmd.name}`, value: `- ${cmd.description} \n \n Usage: \n ${prefix}${cmd.example}`});
                }

            });
            message.channel.send(embed).then(msg => {msg.delete({timeout: 30000}) });
            return;
	},
};
