const {prefix} = require('../Configs/config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
    Title:'Help',
    description: 'Displays help menu',
	async execute(Bot, message, args) {
        
		const embed = new Discord.MessageEmbed()
            .setColor(0x9b59b6)
            .setFooter("Made by GULD");

            let commands = Bot.commands;

            console.log(args[0]);
            if(args[0] == undefined){
                embed.setTitle("Command List")
                if(!message.member.hasPermission("ADMINISTRATOR")){

                    commands.forEach(cmd => {
    
                        if(cmd.name != "help"){
    
                            if(cmd.permissions != "ADMIN"){
    
                                embed.addFields({name:`${cmd.Title}`, value: `${prefix}${cmd.example}. \n\n*More information: ${prefix}${this.name} ${cmd.name}*`});
                            } 
                        }
                    });
                }
                else{
    
                    commands.forEach(cmd => {
    
                        if(cmd.name != "help"){
    
                            embed.addFields({name:`${cmd.Title}`, value: `${prefix}${cmd.example}. \n\n*More information: ${prefix}${this.name} ${cmd.name}*`});
                            
                        }
                    });
                }
            }
            else{
                
                let command = FindCommand(commands, args[0])
                console.log(command);
                if(command != undefined){

                    let tempVal = command.param;
                    embed.setTitle(`Help Menu: ${command.Title}`)
                    embed.addFields({name:`${command.Title}`, value: `- ${command.description}.`});
                    embed.addFields({name:`Usage`, value: `${prefix}${command.example}`});

                    if(tempVal.includes("/")){
                        let tempParams = tempVal.split("/");
                        tempParams.forEach(parameter => {

                            let param = parameter.split(":");
                            embed.addFields({name: `<${param[0]}>`, value: `${param[1]}`});
                            
                        });
                    }
                    else{
                        let param = tempVal.split(":");
                        embed.addFields({name: `<${param[0]}>`, value: `${param[1]}`});
                    }
                   
                    

                }
                else{
                    message.reply("I dont know how to help you..").then(msg => {msg.delete({timeout: 5000})});
                }

            }
            
            message.channel.send(embed).then(msg => {msg.delete({timeout: 30000}) });
            return;
	},
};

function FindCommand(commandList, target =''){
    let command;
    commandList.forEach(cmd => {

        if(cmd.name == target){
            command = cmd;
        }
            
    });

    if(command != undefined){
        return command;
    }
    else{return undefined}
    
}