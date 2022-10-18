import { REST, Routes } from 'discord.js';
import { discord_token, discord_client_id } from './index'
import fs from 'fs'

const commands = []

const commandFiles = fs.readdirSync('./command').filter(file => file.endsWith('.js'))


for(const file of commandFiles){
    const command = require(`./command/${file}`)
    commands.push(command.data.toJson())
}


const rest = new REST({ version : 10 }).setToken(discord_token);


const register_commands = () => {
    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');
    
            await rest.put(Routes.applicationCommands(discord_client_id), { body: this.commands });
    
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
}

module.exports = { register_commands }