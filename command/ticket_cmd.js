import { EmbedBuilder } from 'discord.js'


const ticket_cmd = async (interaction) => {

    const ticketEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Support ' + interaction.guild.name)
        .setDescription('React to open a ticket')
        .addFields(
            {
                name: 'Ticket',
                value: 'React to open a ticket',
            }
        )
        .setTimestamp();

    await interaction.channel.send(ticketEmbed)

}

export {ticket_cmd}