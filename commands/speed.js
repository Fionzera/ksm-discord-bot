
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("speed")
    .setDescription("🎵 | Acelera a música!"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const queue = client.distube.getQueue(interaction);
      const language = db.fetch(`language_${interaction.user.id}`)
if (!language) {
         if (!queue) return interaction.followUp(`Mano! não to tocando nada.`)
interaction.followUp({content: "Cara? KKKK procura por nightcore, é mais fácil"})
queue.filters.add("nightcore")
}

 }
}
