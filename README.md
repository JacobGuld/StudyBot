# StudyBot
A bot developed to support group work on Discord, while organizing and keeping the discord server clean.

**Contents**
- [Features](#Features)
- [Discord Server Template](#Discord-Server-Template)
- [Installation](#Installation)
- [Inital Run](#Initial-Run)


## Features

### Keeps track of voice channels

   The bot will keep your discord server clean. By joining the general voice chat, a member will create a new voicehannel.
   The member will be moved to this voice channel.
   Empty voice channels will be deleted, keeping the server clean.
   
### Polls

   The bot will allow members to create polls, with upto 10 vote options.
   The bot will create reactions, responding to the vote options.
   
   To keep the server clean, all polls will be posted in the \#Vote channel.
   
### Update configs

   The bot enables **Admins** to update channel id´s and what prefix the StudyBot will recognize, without entering the config files.
   
### Register absence

   The bot enables members to announce absence, with proper information, to other group members.
   
## Discord Server Template

   The StudyBot requires the use of a specific Server template. This template will be applied to the discord server during the setup process. 
   You can read more about the _setup process_ and _template_ in the [Wiki]().

## Installation
   **Assumption** _**Node.js**_ _is installed_
   
1. **Create a Discord Bot** 
   - [Discord Developer portal](https://discord.com/developers/docs/intro)
   - Add the bot to your Discord server
   
2. **Clone this repository**
   ```
   git clone https://github.com/JacobGuld/StudyBot.git
   ```
3. **Install modules**

   **Assumption** _You have cd´ed into the StudyBot folder_
   
   ```
   npm install
   ```
4. **Insert Bot token in the _.env_ file**
   
     
   ![env example](https://user-images.githubusercontent.com/45423701/138616343-76f6ddea-f377-454c-9235-dd31ac49de6e.PNG)
   
5. **Done**

   The bot can now be run!
   ```
   node StudyBot.js
   ```
## Inital Run
    
   **Assumption** 
   - _**Setup** completed_
   - _You are serveradministrator_
   
1. **Run Setup**
   ```
   !setup
   ```
2. **Restart bot.**
3. **The bot is ready**
