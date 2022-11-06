import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from 'discord.js'
import { setTimeout } from 'node:timers/promises'
/**
 * 
 */
const ticket_cmd = async (interaction) => {

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

    await interaction.channel.send({ embeds: [ticketEmbed], ephemeral: true, components : [row] })
    setTimeout(2000)
    await interaction.deferReply({content : 'Your ticket embded is succefully builded', ephemeral : true})

}

export { ticket_cmd }