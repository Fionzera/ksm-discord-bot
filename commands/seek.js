
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("seek")
    .setDescription("🎵 | Mostra a fila de música!")
    .addStringOption(option => option.setName("number").setDescription("O quanto você quer ver da fila?").setRequired(true)),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const queue = client.distube.getQueue(interaction);
         if (!queue) return interaction.followUp(`Eh... a fila ta vazia.`)
         const number = interaction.options.getString("number")
         if(isNaN(number)) return interaction.followUp("Digite um número!")
         const type = parseInt(number)
         queue.seek((queue.currentTime + type))
         return interaction.followUp("Playlist avançada.")


try {
 } catch (e) {
   return;
 }
 }
}
