# StudyBot
A Discord bot developed to support Group work.

**Contents**
- [Commands](#Commands)
- [Server Template](#Template)
- [Setup](#Bot-Setup)
- [Inital Run](#Initial-Run)

## Commands
- [Setup](#Setup)
- [Update](#Update) 
- [Voting System](#Voting-System)
- [Absence Registry](#Absence-Registry)
- [Edit VC Names](#Edit-VC-Name)

### Setup

   _**Note:**_ _The setup can not be completed, if the bot is being run by tools like **nodemon**_

   This is an **Admin Command**. 
   
   This command will delete all existing _Categories_ and _channels_ and then rebuild the discord server from the [StudyBot Template](#Template).
   
   The command:
   ```
   !setup <password>
   ```
   **Parameters**
   
     - <password> : Required to run the setup command. _Ensure that you want to run the setup process_.
   
   *_Requires the bot to be restarted afterwards - to apply the changes_*   
   
### Update
   
   This is an **Admin Command**.
   
   This command will let an **Admin** update a channels id or the _StudyBot_ prefix.
   
   The command:
   ```
   !update <Item> <new item>
   ```
   **Parameters**
   
     - <item> : ChannelName or "Prefix".
     - <New item : ChannelId or new prefix.
   
   
   *_Requires the bot to be restarted afterwards - to apply the changes_*  
   
### Voting System
   
   This command will let a member create a poll in the _Vote channel_, with upto 10 poll options. 
   Always create a "skip" option, for members who does not want to vote on a option.
   
   The command:
   ```
   !vote <option>:<option>:etc..
   ```
   **Parameters**
   
     - <Option> Voting option.
     - : Used to divide the options.
   

### Absence Registry

   This command will let a member create an embed, telling the others that they will be absent on a specific date. 
   
   _If date is not filled in, the absence will default to the current date_
   
   The command:
   ```
   !absence <dd>/<mm> <Reason>
   ```
   **Parameters**
  
     - <dd> Day of the month.
     - <mm> Month.
     - <Reason> The reason for absence.
   

### Edit VC Names

   This command will let a member edit the name of a current joined voice channel.
   
   The command:
   ```
   !edit <NewChatName>
   ```
   **Parameters**
  
     - <NewChatName> The new name of the voice channel.
   

## Server Template

   The StudyBot requires the use of a specific Server template. 


![Discord Template](https://user-images.githubusercontent.com/45423701/138615911-837b9d5c-e0af-4dee-b43c-8ecc5808c6bd.PNG)

## Bot Setup
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
   

