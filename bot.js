const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log('I am ready!');
});

client.on('ready', () => {
   client.user.setGame('Going On BroVentures')
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
   if (message.content === 'Mahon') {
      message.channel.send({embed: {
         color: 3447003,
         description: ":pray: mahon :pray:"
                    }
   })
 }});

client.on('message', message => {
   if (message.content === 'botinfo') {
      message.channel.send({embed: {
          title: "I'm Bitchell, the BroCorp Discord bot",
          description: "My job is to do absolutely fucking nothing and look somewhat similar to the Mesaiah, Jesus Christ. My one rule is to always remind my friends to FUCK DEVIN! Have a wonderful day.",
          url: "https://brocorp.io/",
          color: 15277667,
          thumbnail: {
          url: "http://masoncoley.com/wp-content/uploads/2017/05/10012484_816736341675454_1800625882_n.png"
                     }}
   })
 }});

client.on('message', message => {
   if (message.content === '!help') {
      message.channel.send({embed: {
      color: 15277667,
      "fields": [
      {
        "name": "!rank",
        "value": "Display server rank"
      },
      {
        "name": "!levels",
        "value": "View full rank list"
      },
      {
        "name": "!ea",
        "value": "Get link to FREE training course"
      },
      {
        "name": "mahon",
        "value": "Call for group prayer"
      },
      {
        "name": "botinfo",
        "value": "Learn about Bitchell[BOT]"
      }]
      }
   })
 }});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
