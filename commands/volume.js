
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("volume")
    .setDescription("🎵 | Altera o volume do bot!")
    .addStringOption(option => option.setName("number").setDescription("1-100").setRequired(true)),
    run: async (client, interaction, track) => {
      await interaction.deferReply()
      const string = interaction.options.getString("number")
      const volume = parseInt(string)
      const language = db.fetch(`language_${interaction.user.id}`)
if (!language) {
  const queue = client.distube.getQueue(interaction);
     if (!queue) return interaction.followUp(`Chapou muito, não to tocando nada.`)
     if (isNaN(volume)) return interaction.followUp("Preciso de números!")
     if (volume < 1) return interaction.followUp("Amigão, não pode ser número menor que 1.")
     if (volume > 100) return interaction.followUp("Paia, muito paia, eu quero um número entre 1 e 100.")
     client.distube.setVolume(interaction, volume);
     interaction.followUp("Pronto padrin, o volume está no **"+volume+"**, tá me ouvindo?")
       }
      
 }
}
