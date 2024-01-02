
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("back")
    .setDescription("🎵 | Volta música!")
    .addStringOption(option => option.setName("numero").setDescription("Quantas músicas você quer voltar?").setRequired(true)),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const queue = client.distube.getQueue(interaction);
         if (!queue) return interaction.followUp(`Sem músicas na lista ainda.`)
         const number = interaction.options.getString("numero")
         if(isNaN(number)) return interaction.followUp("Digite um número!")
         const type = parseInt(number)
         queue.seek((queue.currentTime - type))
         return interaction.followUp("Voltando...")


try {
 } catch (e) {
   return;
 }
 }
}
