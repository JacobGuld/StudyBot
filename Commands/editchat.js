const config = require('../Configs/config.json');
const {GeneralChat} = require('../Configs/Channels.json');
module.exports = {
	name: 'edit',
	Title:'Edit',
	example:'edit <NewChatName>',
	description: 'Changes the name of the current chat',
	async execute(Bot, message, args) {
		
		if(message.member.voice.channel !== null){ //Checks if the user is in a voice channel
                
			if(message.member.voice.channel.id !== GeneralChat){ //Checks if the user is in the general voice channel

				if (args[0] !== undefined){ //checks if the user has input a new name for the channel

					let channelName = "";
					message.delete({timeout: 1000});

					//in case more than one word is input for a channel.
					for (let i = 0; i < args.length; i++){ 
						channelName += args[i] + " ";
					}
					Bot.channels.cache.get(message.member.voice.channel.id).setName(channelName); //changes the name of the current channel
					
					
				} 
				else { //if the user did not input a new name for the channel
					message.delete({timeout: 500});
					message.reply("Please enter the new channel name!").then(msg => {msg.delete({timeout: 3000}) });
				}
			}
			else{ //If the user tries to change the name for the general voice channel
				message.delete({timeout: 500});
				message.reply("You cannot rename the general chat!").then(msg => {msg.delete({timeout: 3000}) });
			}
		}                    
		else{ //If the user is not in a voice channel
			message.delete({timeout: 500});
			message.reply("You are not in a voicechannel?").then(msg => {msg.delete({timeout: 3000}) });
		}
	},
};