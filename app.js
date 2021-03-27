const Discord = require("discord.js");
const fs = require("fs");

require("dotenv").config();

const client = new Discord.Client();

client.commands = new Discord.Collection();
const prefix = process.env.PREFIX;

client.login(process.env.DISCORD_BOT_TOKEN);

let channel;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', async () => {
    console.log("Bot is ready");
})

client.on('message', (msg) => {
    // ignore if a bot sends the message
    if (msg.author.bot || !msg.content.startsWith(prefix)) return;

    args = msg.content.slice(prefix.length).trim().split(/ +/);
    // ["hello", "Saif"]
    command = args.shift().toLowerCase();

    if (!client.commands.get(command)) {
      return msg.reply("No such command found");
    }

    command = client.commands.get(command);

    try {
      command.execute(msg, args);
    } catch (error) {
      console.log(error);
      return msg.channel.send("There was an error executing the command");
    }


    // if (command === "hello"){
    //   return msg.reply(`Hello, ${args[0]}`);
    // }
    // if (command === )
})
