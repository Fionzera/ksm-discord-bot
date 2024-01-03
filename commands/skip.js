
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("skip")
    .setDescription("🎵 | Pula para a próxima música!"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const queue = client.distube.getQueue(interaction);
      const language = db.fetch(`language_${interaction.user.id}`)
if (!language) {
  if (!queue) return interaction.followUp(`KKK Chapou muito ein, não ta tocando nada.`)
     if (queue.songs.length === 1) return interaction.followUp("KKKKK MANO, Não tem nada na fila!")
  client.distube.skip(interaction)
return interaction.followUp("Que isso? pulo a música do cara")
}
 }
}
