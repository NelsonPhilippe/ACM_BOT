import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
import fs from 'node:fs';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages] });

import * as dotenv from 'dotenv';

dotenv.config();
const discord_token = process.env.DISCORD_TOKEN;

// start client discord
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    const guilds = client.guilds.cache

    guilds.forEach(async element => {
        let id = element.id
        let name = element.name
        
        await Guild.create({
            guild_id : id,
            name : name
        })

    });

})

const handlersFolder = fs.readdirSync('./handlers').filter(e => e.endsWith('.js'));

for(const file of handlersFolder){
    const { default : defaultFunc } = await import('./handlers/' + file);
    defaultFunc(client);
}

client.handleEvents();
client.handleCommands();


client.login(discord_token);

