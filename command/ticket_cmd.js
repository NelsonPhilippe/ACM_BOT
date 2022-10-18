 import { SlashCommandBuilder } from 'discord.js';



module.exports = {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Support command for support.'),
        async execute(interaction){
            await interaction.reply('Tezst')
        }
}