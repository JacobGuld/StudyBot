const {VoiceChannelsCategory} = require('../Configs/Channels.json');
const {maxUsersInVc} = require('../Configs/Channels.json');

module.exports.execute = async (Bot, newState) => {
        
        let channelName = `${newState.member.displayName}´s chat`;
        
        newState.guild.channels.create(channelName, {type: "voice", parent: VoiceChannelsCategory, userLimit: maxUsersInVc,}).then(result => {
        newState.member.voice.setChannel(result.id)
        })
    
}