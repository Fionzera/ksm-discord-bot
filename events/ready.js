const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
  client.user.setActivity("🎵 | Deixa eu trabalhar!! da /play aí")
}};
