
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("loop")
    .setDescription("🎵 | Modo repeat do que está tocando!"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const language = db.fetch(`language_${interaction.user.id}`)
      const queue = client.distube.getQueue(interaction);
      if (!language) {
         if (!queue) return interaction.followUp(`Sem música na fila paizão.`)
         client.distube.setRepeatMode(interaction, 1);
return interaction.followUp("Essa música de novo nããããããoooo.")
}

 }
}
