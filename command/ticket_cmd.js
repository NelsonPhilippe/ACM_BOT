 import { SlashCommandBuilder } from 'discord.js';



export const ticket_cmd = {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Support command for support.'),
        async execute(interaction){
            await interaction.reply('Tezst')
        }
}