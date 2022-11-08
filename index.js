import { Sequelize } from 'sequelize';
import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages] });

import * as dotenv from 'dotenv'

dotenv.config()

import { register_commands } from './discord_rest.js'

//Command files
import { ticket_cmd } from './command/ticket_cmd.js'

// Event files
import { ticket_btn } from './button/ticket_button.js';

const discord_token = process.env.DISCORD_TOKEN
const discord_client_id = process.env.DISCORD_CLIENT_ID

register_commands()

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

// Models Database

import {Guild} from './models/Guilds.js'


try{
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
} catch(error) {
    console.error('Unable to connect to the database : ', error)
}


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

// command event
client.on('interactionCreate', async interaction => {


    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }

    if (interaction.commandName === 'ticket') {
        await ticket_cmd(interaction)
    }
})

// Button Event
client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId === 'create_ticket') {
        await ticket_btn(interaction)
    }
})


client.login(discord_token);

export { discord_token, discord_client_id }
