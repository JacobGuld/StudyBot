const config = require('../Configs/config.json');
const channels = require('../Configs/Channels.json');

const minArgs = 1;
var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();
var currentSeconds = new Date().getSeconds();

module.exports = {
	name: 'remind',
	description: 'Creating a reminder',
	execute(Bot, message, args) {

        let hours = 0;
        let minutes = 0;
        
		if (args !== undefined){ //Checks if there is more that the message contains more than the command
            
            message.delete({timeout: 1000});
            console.log(`Hour: ${currentHour}, minutes: ${currentMinute}, seconds: ${currentSeconds}`)

            let tempTime = args[0].split(".");

            let inputHour = tempTime[0];
            let inputminute = tempTime[1];

            console.log(`input: hour ${tempTime[0]}, min: ${tempTime[1]}`);

            if(inputHour == currentHour && inputminute == currentMinute){
                try{
                    message.reply("The time your inputtet is now - i cannot do that!").then(msg => {msg.delete({timeout: 3000})});
                }catch(error){
                    console.log(error.message);
                }
                return;
            }
            //calculate hour(s)
            if(inputHour < currentHour){

                hours = ((24-currentHour) + inputHour);

            }
            else if (currentHour <= inputHour){

                hours = inputHour - currentHour;

            }          

            //calculate minutes
            if(inputminute < currentMinute){

                minutes = ((60-currentMinute)+ inputminute);
                hours = hours - 1 ;

            }
            else if(currentMinute <= inputminute){

                minutes = inputminute - currentMinute;

            }
            
            
            let delay = CalculateMilliseconds(hours, minutes, currentSeconds);
            console.log(delay/1000 + "s");
            try {

                let textChan = Bot.channels.cache.get(channels.ReminderChat);
                message.reply(`I will remind you in ${hours} hour(s) and ${minutes} minute(s)!`).then(msg => {msg.delete({timeout: 5000})});
                setTimeout(Reminder, delay, textChan, args[1]);
                
            } catch (error) {
                console.log(error.message);
                
            }                 
        }
	},
};


function Reminder(channel, text){

    channel.send(`I am reminding @everyone : ${text}`);
    
}


function CalculateMilliseconds(Hour, minutes, seconds){

    return (Hour*3600000 + minutes*60000)- seconds*1000;
}



