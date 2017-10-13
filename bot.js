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
      message.channel.send({embed: {
         color: 3447003,
         description: ":pray: mahon :pray:"
                    }
   })
 }});

client.on('message', message => {
   if (message.content === 'testing') {
      message.channel.send({embed: {
          title: "This is a BroCorp Discord bot",
          description: "I'm testing this bot out to be awesome as fuck and do some cool shit. 100% coded using Node JS on 24/7 Heroku",
          url: "https://brocorp.io/",
          color: 15277667,
          timestamp: "2017-10-13T06:51:28.649Z",
          footer: {
          icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
          text: "footer text"
                  },
          thumbnail: {
          url: "https://cdn.discordapp.com/embed/avatars/0.png"
                     }}
   })
 }});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
