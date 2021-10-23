const {prefix} = require('../Configs/config.json')
const Discord = require('discord.js');

module.exports = {
    name: 'setup',
    Title: 'Setup',
    example: `${prefix}setup`,
    description: '',

    async execute(Bot, message, args){

        if(message.member.hasPermission("ADMINISTRATOR")){

            let categories = ['PROJECT', 'SOCIAL', 'VOICE CHANNELS'];
            let projectChannels = ['💬general', '📕study','📊vote','📮absent-register'];
            let socialChannels = ['📱contact-info','🔞meme'];
            let voiceChannels = ['🆕 Chat'];

            const mainEmbed = new Discord.MessageEmbed().setTitle('Welcome!')
            .setDescription("You have just completed the StudyBot setup.\n Before the bot is ready for use, you will have to update the channel id´s.")
            .addFields({name:"How to update channel id´s", value: "Enter the Configs folder. Copy the channels id´s from this server into the Channels.json file \n\n After a restart the bot will be ready for use. Please enjoy!"})
            .setColor(0x9b59b6);
            
    
            try {
            
            message.channel.delete();
            GenerateCategory(message, categories[0],'text', projectChannels, mainEmbed);
            GenerateCategory(message, categories[1],'text', socialChannels, mainEmbed);
            GenerateCategory(message, categories[2],'voice', voiceChannels, mainEmbed);
            
            } catch (error) {
                console.log(error.message);
            }

        }
        else{
            message.delete();
            message.reply("You are not authorized to use this command!").then(msg => {msg.delete({timeout: 5000})});
        }

        
        
    }

}

function GenerateCategory(message, category, channelType, channels, embed){

    message.guild.channels.create(category, {
        type: 'category',
        PermissionOverwrites:[
            {
                id: message.guild.id,
                allow: ['VIEW_CHANNEL'],
            }]
    }).then(cat => {

        for(let i = 0; i<channels.length; i++) {
            
            
            if(channels[i] == '💬general'){

                message.guild.channels.create(channels[i], {
                    type: channelType,
                    parent: cat,
                    PermissionOverwrites:[
                        {
                            id: message.guild.id,
                            allow: ['VIEW_CHANNEL'],
                        }]
                }).then(chan =>{chan.send(embed)});
            }
            else{

                message.guild.channels.create(channels[i], {
                    type: channelType,
                    parent: cat,
                    PermissionOverwrites:[
                        {
                            id: message.guild.id,
                            allow: ['VIEW_CHANNEL'],
                        }]
                })
            }
            
        };
        
    })


}

