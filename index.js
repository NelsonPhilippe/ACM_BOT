import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

import * as dotenv from 'dotenv'

dotenv.config()

import {register_commands} from './discord_rest.js'

const discord_token = process.env.DISCORD_TOKEN
const discord_client_id = process.env.DISCORD_CLIENT_ID


register_commands()


// start client discord
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

// command event
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
    
})


client.login(discord_token);

export {discord_token, discord_client_id}
