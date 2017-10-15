const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')
const p = settings.prefix;
var time = new Date;

client.on('ready', () => {
  console.log('OK!');
  client.user.setGame(settings.gameName);
});

client.on('message', m => {
  const r = ('<@' + m.author.id + '>  ');
  if (m.author.bot) return;
  else {
    if (m.content === p + 'invite') {
      m.channel.send('https://discord.gg/pcH6z9p');
    };
    if (m.content === p + 'ping') {
      m.channel.send(r + 'pong  ' + `${Math.round(client.ping)}` + 'ms');
    };
    if (m.content === p + 'BotGit') {
      m.reply(settings.gitURL);
    };
  };
});

client.login(settings.DiscordToken);
