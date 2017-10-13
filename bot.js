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
          title: "title ~~(did you know you can have markdown here too?)~~",
          description: "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
          url: "https://discordapp.com",
          color: 3956593,
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
