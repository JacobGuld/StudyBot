const config = require('../Configs/config.json');
const channels = require('../Configs/Channels.json');

const minArgs = 1;
var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();

module.exports = {
	name: 'vote',
	description: 'Creating a poll',
	execute(Bot, message, args) {
        message.delete({timeout: 1000});

        let role ="everyone";
        let concatText ="";
        let pollOptions;
        let Save = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'];
        let reactions = [];
        let textOutput='';
        
     
		if (args !== undefined){ //Checks if there is more that the message contains more than the command
            
            for(i=0; i<args.length; i++){

                concatText += args[i] + " ";
            }
            if(concatText.includes(":")){

                pollOptions = SplitOnChar(concatText, ":");

                for(i=0; i<pollOptions.length; i++){
                    reactions.push(Save[i]);
                    textOutput += `${Save[i]} : ${pollOptions[i]} \n\n`;
                }

                textOutput += `⏭️ : Dont Care \n \n \n`;
                reactions.push('⏭️');


                try {
                    let textChan = Bot.channels.cache.get(channels.VoteChat);
                    textChan.send(`@${role} ${message.author.username} Calls for a vote! \n${textOutput}\n\n`).then(msg =>{ReactToMessage(msg, reactions)});
                    
                } catch (error) {
                    console.log(error.message);
                }   
            }
        }
	},
};

function SplitOnChar(args,char){

    return args.split(char);

}

function ReactToMessage(message, reactions){
    message.react(reactions[0]);

    reactions.shift();
    if(reactions.length > 0){
        try {
            setTimeout(ReactToMessage, 100, message, reactions);    
        } catch (error) {
            console.log(error.message);
        }
        
    }
}

 




