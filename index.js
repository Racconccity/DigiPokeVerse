require('dotenv').config()
const config = require("./config.json");
const Discord = require("discord.js");
const colours = require("./colours.json");
const fs = require("fs");
const { Client } = required('discord.js')
const ytdl = require('ytdl-core')
const PREFIX = '-'
const client = new Discord.Client({ disableEveryone: true });
//////////////////////////////////////////////////////////////////////////////////////
client.on("ready", async() => {
    console.log("Bot listo");
    client.user.setPresence({
        status: "online",
        game: {
            name: "Dark Souls: Remastered",
            type: "PLAYING"
        }
    });
});
//////////////////////////////////////////////////////////////////////////////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("No hay comandos")
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        });
    });
});
//////////////////////////////////////////////////////////////////////////////////////
fs.readdir("./Digimons/", (err, files) => {
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("No hay comandos")
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./Digimons/${f}`);
        client.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        });
    });
});
//////////////////////////////////////////////////////////////////////////////////////
fs.readdir("./Pokemon/", (err, files) => {
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("No hay comandos")
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./Pokemon/${f}`);
        client.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        });
    });
});
//////////////////////////////////////////////////////////////////////////////////////
client.on('message', async message => {
  if(message.author.bot) return
  if(!message.content.startsWith(PREFIX)) return

  const args = message.content.substring(PREFIX.length).split(" ")

  if(message.content.startsWith(`${PREFIX}play`)){
    const voiceChannel = message.member.voice.channel
    if(!voiceChannel) return message.channel.send("Metete en el chat amigo")
    const permissions = voiceChannel.permissionsFor(message.client.user)
    if(!permissions.has('CONNECT')) return message.channel.send ("No hay permisos")
    if(!permissions.has('SPEAK')) return message.channel.send ("No hay permisos")

    try {
      var connection = await voiceChannel.join()
    } catch (error) {
      console.log('Hay problemas gordos')
      message.channel.send('Hay problemas gordos')
    }

    const dispatcher = connection.play(ytdl(args[1]))
    .on('finish', () => {
      voiceChannel.leave()
    })
    .on('error', error => {
      console.log(error)
    })
    dispatcher.setVolumeLogarithmic(5 / 5)
  } else if (message.content.startsWith(`${PREFIX}stop`)){
    if(!message.member.voice.channel) return message.channel.send("Metete al chat para eso")
    message.member.voice.channel.leave()
    return undefined
  }
});
//////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {

  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '-'

   if (message.channel.id === '646469578540449792') {
     if (message.content == '-digimons') {
       message.delete(1)
     }
   }
});
//////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {

  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '-'

   if (message.channel.id === '650350820256382986') {
     if (message.content == '-pokemons') {
       message.delete(1)
     }
   }
});
//////////////////////////////////////////////////////////////////////////////////////
client.on("message", async(message) => {
    let prefix = config.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length)) ||
        client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if (commandfile) commandfile.run(client, message, args)

});
client.login(process.env.token);
