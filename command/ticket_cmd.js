import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from 'discord.js'
import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Ticket command for support'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('create_ticket')
                    .setLabel('open')
                    .setStyle(ButtonStyle.Success)
            )

        const ticketEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Support ' + interaction.guild.name)
            .setDescription('React to open a ticket')
            .setAuthor({ name: 'XiliTra' })
            .addFields(
                {
                    name: 'Ticket',
                    value: 'React to open a ticket',
                }
            )
            .setTimestamp();

        await interaction.channel.send({ embeds: [ticketEmbed], components : [row] })
        await interaction.deferReply({ephemeral: true});
        await interaction.editReply({content : 'Your ticket embded is succefully builded', ephemeral : true})

    }
}

