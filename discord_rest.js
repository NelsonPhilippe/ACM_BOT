const { REST, Routes } = require('discord.js');
const { discord_token, discord_client_id } = require('./index')

console.log(discord_token)

exports.commands = [
    {
        name : "ping",
        description: "Permet de vérifier le bon fonctionnement du bot discord"
    }
]


const rest = new REST({ version : 10 }).setToken(discord_token);


(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(discord_client_id), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();