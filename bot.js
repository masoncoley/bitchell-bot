const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log('I am ready!');
});

client.on('message', message => {
   if (message.content === 'ping') {
      message.reply('pong');
   }
});

client.on('message', message => {
   if (message.content === 'mahon') {
      message.reply(':pray: mahon :pray:');
   }
});


client.on('message', message => {
   if (message.content === 'testing') {
      message.reply('{embed: {
         color: 3447003,
         description: "A very simple Embed!"
                    }
   }')
 }});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
