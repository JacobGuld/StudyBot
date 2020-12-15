const channels = require('../Configs/Channels.json');

module.exports.execute = async (Bot, newState) => {
        
        let channelName = `${newState.member.displayName}´s chat`;
        
        newState.guild.channels.create(channelName, {type: "voice", parent: channels.VCCategory, userLimit: 10,}).then(result => {
        newState.member.voice.setChannel(result.id)
        console.log(`${newState.member.displayName} created a new chat`);
        })
    
}