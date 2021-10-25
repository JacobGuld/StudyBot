const {prefix} = require('../Configs/config.json')
const Discord = require('discord.js');
const fs = require('fs');
const path = './Configs/Channels.json';
const secPath = './Configs/secCode.json';


module.exports = {
    name: 'setup',
    Title: 'Setup',
    example: `setup`,
    description: 'Deletes all current categories and channel. Creating all new categories and channels. ',

    async execute(Bot, message, args){

        if(message.member.hasPermission("ADMINISTRATOR")){

            if(args[0] != undefined){

                if(!CheckPassword(args[0])){ 

                    let secFile = LoadJSON(secPath);
                    let currentPass = secFile.Password;
                    SaveJSON(secPath, secFile);
                    message.reply(`Please authorize the setup action with the password ${currentPass}`).then(msg => {msg.delete({timeout: 20000})});
                    return;
                }
            }else {
                message.reply(`Please authorize the setup action with a password`).then(msg => {msg.delete({timeout: 20000})});
                return;
            }
            
            DeleteAllChannels(message);

            let categories = ['PROJECT', 'SOCIAL', 'VOICE CHANNELS'];
            let projectChannels = ['💬general', '📕study','📊vote','📮absent-register'];
            let socialChannels = ['📱contact-info','🔞meme'];
            let voiceChannels = ['🆕 Chat'];
        
            const mainEmbed = new Discord.MessageEmbed().setTitle('Welcome!')
            .setDescription("You have just completed the StudyBot setup.\n ")
            .addFields({name:"RESTART REQUIRED", value: "Before the bot is ready for use, you will have to restart the bot!"})
            .setColor(0x9b59b6);
        
            try {

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

function DeleteAllChannels(message){
    message.guild.channels.cache.forEach(channel => channel.delete());
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

        UpdateJson(category, cat.id.toString());

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
                }).then(chan =>{
                    chan.send(embed);
                    UpdateJson(channels[i], chan.id.toString());
                });
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
                }).then(chan =>{
                    
                    UpdateJson(channels[i], chan.id.toString());
                });
            }
        };
    })
}

function UpdateJson(channel, channelId){

    let file = LoadJSON(path);
    //console.log(`channel: ${channel} \n id: ${channelId} \n`);
    switch (channel) {
        case "💬general":
                file.GeneralTextChat = channelId;
            break;
        case "📊vote":
                file.VoteChat = channelId;
            break;
        case "📮absent-register":
                file.AbsentRegisterChat = channelId;
            break;
        case "🆕 Chat":
                file.GeneralVoiceChat = channelId;
            break;
        case "📕study":
                file.StudyChat = channelId;
            break;
        case "📱contact-info":
                file.ContactChat = channelId;
            break;
        case "🔞meme":
                file.memeChat = channelId;
            break;
        case "PROJECT":
                file.ProjectCategory = channelId;
            break;
        case "SOCIAL":
                file.SocialCategory = channelId;
            break;
        case "VOICE CHANNELS":
                file.VoiceChannelsCategory = channelId;
            break;
        default:
            console.log(`Error: Unknown Channel: ${channel}`);
            break;
    }
    SaveJSON(path, file);
}

function LoadJSON(filePath =''){
    return JSON.parse(
        fs.existsSync(filePath)
        ? fs.readFileSync(filePath).toString()
        :'"'
    )
}

function SaveJSON(filePath ='', json = '"'){
    return fs.writeFileSync(filePath, JSON.stringify(json, null, 2))
}

function CheckPassword(password){

    let secFile = LoadJSON(secPath);

    if(secFile.Password == password){
        
        let newPass = GenerateNewPasscode();
        secFile.Password = newPass;
        SaveJSON(secPath, secFile);
        return true; 
    }else{
        return false;
    }
    
    
}

function GenerateNewPasscode(){
    return Math.floor(Math.random() * (9999 - 1000) + 1000);

}
