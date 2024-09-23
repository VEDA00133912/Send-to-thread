const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const { config } = require('dotenv');
config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

fs.readdirSync('./events')
  .filter(file => file.endsWith('.js')).forEach(file => {
    const { name, once, execute } = require(`./events/${file}`);
    client[once ? 'once' : 'on'](name, execute);
  });

client.login(process.env.token);
