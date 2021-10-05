const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('hello world');
});

client.on('interactionCreate', async interaction => {


  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

});

client.login('ODk0NTgwMTc0MDg2MDgyNTgw.YVsEtQ.UaXd2LF2Pg0XBb-okGSa1m3PwyA');