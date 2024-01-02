
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("pause")
    .setDescription("🎵 | Pausa a música!"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const language = db.fetch(`language_${interaction.user.id}`)
if (!language) {
      const queue = client.distube.getQueue(interaction);
         if (!queue) return interaction.followUp(`A fila está vazia, vou pausar o que amigão?.`)
         if (queue.paused === true) return interaction.followUp("KKKK Chapou muito ein, já ta pausada!.")

interaction.followUp({content: "Aí não padrin, deixa eu cantar"})
client.distube.pause(interaction);
}

 }
}
