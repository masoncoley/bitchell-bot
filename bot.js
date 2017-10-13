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
   if (message.content === 'brobot') {
      message.channel.send({embed: {
          title: "This is a BroCorp Discord bot",
          description: "I'm testing this bot out to be awesome as fuck and do some cool shit. 100% coded using Node JS on 24/7 Heroku",
          url: "https://brocorp.io/",
          color: 15277667,
          thumbnail: {
          url: "http://masoncoley.com/wp-content/uploads/2017/05/10012484_816736341675454_1800625882_n.png"
                     }}
   })
 }});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
