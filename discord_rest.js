import { formatEmoji, REST, Routes } from 'discord.js';

import fs from 'node:fs';

import * as dotenv from 'dotenv'

dotenv.config()


const commands = [];

const commandFiles = fs.readdirSync('./command').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = import(`./command/${file}`);
    commands.push(command.data.toJson())
}

const discord_token = process.env.DISCORD_TOKEN
const discord_client_id = process.env.DISCORD_CLIENT_ID

const rest = new REST({ version : 10 }).setToken(discord_token);

const register_commands = () => {
    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');
    
            await rest.put(Routes.applicationCommands(discord_client_id), { body: commands });
    
            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
}

export { register_commands }