
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("resume")
    .setDescription("🎵 | Despausa a músiuca!"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const queue = client.distube.getQueue(interaction);
      const language = db.fetch(`language_${interaction.user.id}`)
      if (queue.paused === false) return interaction.followUp("Já ta tocando paizão")
if (!language) {
         if (!queue) return interaction.followUp(`Sem música na fila, coloca alguma aí.`)
interaction.followUp({content: "Opa! vortei"})
queue.resume()

}


 }
}
