import { REST, Routes } from 'discord.js';
import fs from 'node:fs';

import * as dotenv from 'dotenv'

export default async (client) => {
    client.handleCommands = async () => {
        dotenv.config()

        const discord_token = process.env.DISCORD_TOKEN
        const discord_client_id = process.env.DISCORD_CLIENT_ID

        const commands = [];
        const commandFiles = fs.readdirSync('./command').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            console.log(file);
            const cmd = await import(`../command/${file}`);
            commands.push(cmd.default.data.toJSON())
        }

        const rest = new REST({ version: 10 }).setToken(discord_token);

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
}
