const Discord = require("discord.js");
const client = new Discord.Client();
var fs = require("fs");
var settings = JSON.parse(fs.readFileSync("./setting.json", "utf8"));
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
      m.channel.send("https://discord.gg/pcH6z9p");
    }

    if (m.content === p + "ping") {
      m.channel.send(r + "pong  " + `${Math.round(client.ping)}` + "ms");
    }

    if (m.content === p + "BotGit") {
      m.reply(settings.gitURL);
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
