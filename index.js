import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config()

exports.discord_token = process.env.DISCORD_TOKEN
exports.discord_client_id = process.env.DISCORD_CLIENT_ID

import {register_commands} from './discord_rest.js'


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

    ticket_command.event(interaction)

    
})


client.login(this.discord_token);




