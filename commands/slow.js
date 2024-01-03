
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("slowed")
    .setDescription("🎵 | Reverte o comando /speed!"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const queue = client.distube.getQueue(interaction);
      const language = db.fetch(`language_${interaction.user.id}`)
if (!language) {
         if (!queue) return interaction.followUp(`A fila está vázia! kkk chapou ein.`)
interaction.followUp({content: "Percebeu que o speed, deixa a música uma merda neh? KKKKK"})
queue.filters.add("vaporwave")
}

 }
}
