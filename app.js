const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const req = require("request");
var settings = JSON.parse(fs.readFileSync("./settings.json", "utf8"));
const p = settings.prefix;

client.on("ready", () => {
  console.log("OK!");
  client.user.setGame(settings.gameName);
});

client.on("message", m => {
  const r = ("<@" + m.author.id + ">  ");
  if (m.author.bot) return;
  else {
    if (m.content === p + "invite") {
      m.channel.send(settings.inviteURL);
    }

    if (m.content === p + "ping") {
      m.channel.send(r + "pong  " + `${Math.round(client.ping)}` + "ms");
    }

    if (m.content.match(/.*(なん|何)なん.*/)) {
      m.channel.send(r + "( `o´ )ぎんなん");
    }

    if (m.content.match(/.*ぎんなん.*/)) {
      m.channel.send(r + "なんなん");
    }

    if (m.content.match(/.*nvidia.*/i)) {
      m.channel.send({file:"https://cdn.discordapp.com/attachments/360975956791263233/385377392803315713/fuck.jpg"});
    }

    if (m.content === p + "BotGit") {
      m.reply(settings.gitURL);
    }

    if (m.content.match(/.*(唐澤|からさわ|尊師|あああああ|ﾌﾞﾘﾌﾞﾘﾌﾞﾘ).*/)) {
      m.channel.send({file:"http://www.asahicom.jp/articles/images/AS20170804000268_comm.jpg"});
    }

    if (m.content.match(/.+できた.*/)) {
      var msg = m.content.match(/(.+)できた.*/)[1];
      m.channel.send(r + "すっごーい！"
        + m.author.username + "ちゃんは"
        + msg + "できるフレンズなんだね！");
      m.channel.send({file: "https://cdn.discordapp.com/attachments/360975956791263233/385377100020056065/serval_great.jpg"});
    }

    if (m.content.match(/.*(ちょまど|松屋).*/)) {
      req.get({
        url: "http://matsuya-api.herokuapp.com/v2/random",
        qs: {}
      }, function (error, response, body) {
        console.log(body);
        const res = JSON.parse(body);
        m.channel.send(res.menu);
      });
    }

    if (m.content === p + "help") {
      m.channel.send("```\n" + p + "help\n``` \n" +
        "このメニューが表示されます\n" +
        "```\n" + p + "invite\n``` \n" +
        "このDiscordチャンネルへの招待リンクを発行します\n" +
        "```\n" + p + "ping\n```\n" +
        "自分からサーバへのPingを表示します\n今後任意のサーバへのPingを実装予定です" +
        "```\n" + p + "BotGit\n```\n" +
        "このBotのGitHubのURLを投げます\nIssueやPull Request等待っています\n" +
        "その他\nその他要望等ありましたらMakotiaのTwitter(@hs6a)やDiscord(Makotia#2337)、Issueなどどうぞ");
    }
  }

});

client.login(settings.DiscordToken);
