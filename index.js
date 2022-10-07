const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config()

exports.discord_token = process.env.DISCORD_TOKEN
exports.discord_client_id = process.env.DISCORD_CLIENT_ID

require('./discord_rest')



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
})


client.login(this.discord_token);




