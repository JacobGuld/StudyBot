const config = require('../Configs/config.json');
const channels = require('../Configs/Channels.json');
module.exports = {
	name: 'new',
	description: 'Creating new chat with custom name',
	execute(Bot, message, args) {
        
		if (args[0] !== undefined){ //Checks if there is more that the message contains more than the command
            let server = message.guild;
            let channelName = "";
            message.delete({timeout: 1000});
            //in case more than one word is input for a channel. 
            for (let i = 0; i < args.length; i++){ 
                channelName += args[i] + " ";
            }
            if(message.member.voice.channel !== null){ //checks if the user is in a voice channel
                
                server.channels.create(channelName, {type: "voice", parent: channels.VCCategory, userLimit: channels.maxUsersInVC,}).then(result => {
                    message.member.voice.setChannel(result.id)
                    console.log(message.author.username + " Created a channel called " + channelName);
                    
                })
            } else { //if the user is not in a voice channel
                message.delete({timeout: 100});
                message.reply("You have to be in chat, to use this command").then(msg => {msg.delete({timeout: 3000}) });
            }  
        }
	},
};