
const ticket_btn = async (interaction) => {
    await interaction.deferReply({ ephemeral: true })
    await interaction.editReply({ content: 'Your ticket as created ! ' })
}


export { ticket_btn }