import { Events } from "discord.js"

export default {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        // await interaction.deferReply({ ephemeral: true })
        // await interaction.editReply({ content: 'Your ticket as created ! ' })
    }
}

