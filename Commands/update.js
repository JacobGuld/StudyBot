const fs = require('fs');
const {prefix} = require('../Configs/config.json');

module.exports = {
	name: 'update',
    Title:'Update',
    example: `update <ITEM> <NEWITEM>`,
    description: 'Updates the config files',
	async execute(Bot, message, args) {

        const inputChannel = args[0];
        const channelId = args[1];

        if(message.member.hasPermission("ADMINISTRATOR")){

            if(inputChannel != undefined && channelId != undefined){

                let path;
                if(inputChannel == "prefix"){
                    path = './Configs/config.json';
                }
                else{
                    path = './Configs/Channels.json'
                }
                let file = LoadJSON(path);
    
                switch (inputChannel) {
                    case "general":
                            file.GeneralTextChat = channelId;
                        break;
                    case "vote":
                            file.VoteChat = channelId;
                        break;
                    case "absent":
                            file.AbsentRegisterChat = channelId;
                        break;
                    case "VCCat":
                            file.VoiceChannelsCategory = channelId;
                        break;
                    case "voice":
                            file.GeneralVoiceChat = channelId;
                        break;
                    case "prefix":
                            file.prefix = channelId;
                        break;
                    default:
                        console.log("Unknown channel");
                        message.reply("I could find the channel, please try again").then(msg => {msg.delete({timeout: 5000}) });
                        break;
                }
                
                SaveJSON(path, file);
            }
        }
        else{
           message.reply("You are not authorized to use this command!").then(msg => {msg.delete({timeout: 5000})});
        }
    }
};

function LoadJSON(filePath =''){
    return JSON.parse(fs.existsSync(filePath) ? fs.readFileSync(filePath).toString() :'"')
}

function SaveJSON(filePath ='', json = '"'){
    return fs.writeFileSync(filePath, JSON.stringify(json, null, 2))
}
