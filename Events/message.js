const config = require('../Configs/config.json');

module.exports = (Bot, message) => {

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const cmdName = args.shift().toLowerCase();

    const cmd = Bot.commands.get(cmdName)
    
    try{
        cmd.execute(Bot, message, args);
    }catch (e){

        console.log(e.message);
        
    }
}