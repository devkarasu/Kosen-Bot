const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')
const p = settings.prefix;
var time = new Date;

const help_embed = {
  "title": "This Bot Help",
  "url": "https://github.com/mak0tia/proconist_bot",
  "color": 5938152,
  "thumbnail": {
    "url": "https://files.3mdev.space/pictures/icon/procon_logo.jpg"
  },
  "author": {
    "name": "author name",
    "url": "https://discordapp.com",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "fields": [{
      "name": "help",
      "value": "このメニューが表示されます"
    },
    {
      "name": "invite",
      "value": "このDiscordチャンネルへの招待リンクを発行します"
    },
    {
      "name": "ping",
      "value": "自分からサーバへのPingを表示します\n今後任意のサーバへのPingを実装予定です"
    },
    {
      "name": "BotGit",
      "value": "このBotのGitHubのURLを投げます\nIssueやPull Request等待っています"
    },
    {
      "name": "その他",
      "value": "その他要望等ありましたらMakotiaの[Twitter](https://twitter.com/hs6a)やDiscord、Issueなどどうぞ"
    }
  ]
};

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
    if (m.content === p + 'help') {
      m.channel.send('すべてのコマンドの前には' + p + 'をつけてください')
      m.channel.send({
        help_embed
      });
    }
  };
});

client.login(settings.DiscordToken);
