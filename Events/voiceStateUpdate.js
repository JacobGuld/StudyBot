const newChat = require('../Actions/newChat');
const {GeneralVoiceChat} = require('../Configs/Channels.json');

module.exports = (Bot, oldState, newState) =>{

    const createNew = Bot.channels.cache.find(ch => ch.id === GeneralVoiceChat);

    if (newState.channelID === createNew.id){

        newChat.execute(Bot, newState);
    }

    if(oldState.channel == null){
        return;
    }

    if(oldState.channel.members.size === 0){

        if(oldState.channelID === createNew.id){
            return;
        }
        try {
            oldState.channel.delete();
            
        } catch (error) {
            console.log(error)
        }
        
    }
}