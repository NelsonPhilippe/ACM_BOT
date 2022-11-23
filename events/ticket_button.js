import { Events } from "discord.js"

export const cmd = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        await interaction.deferReply({ ephemeral: true })
        await interaction.editReply({ content: 'Your ticket as created ! ' })
    }
}

