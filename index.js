const config = require("./config.json");
const Discord = require("discord.js");
const colours = require("./colours.json");
const fs = require("fs");
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

    if (message.channel.id === '413400477976231939') {
        if (message.content == '-xpp') {
            message.delete(1)
        }
    }
});
//////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {

    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix = '-'

    if (message.channel.id === '413400477976231939') {
        if (message.content == '-xpm') {
            message.delete(1)
        }
    }
});
//////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {

    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix = '-'

    if (message.channel.id === '413400477976231939') {
        if (message.content == '-xpg') {
            message.delete(1)
        }
    }
});
//////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {

    var sender = message.author;
    var msg = message.content.toUpperCase();
    var prefix = '-'

    if (message.channel.id === '413400477976231939') {
        if (message.content == '-coin') {
            message.delete(1)
        }
    }
});
//////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  var prefix = '-'
    if (message.content === '-ca') {
      console.log('');
      let total = Date.now() + (60000*2+60000/2); // 2 minutes later
      let interval = setInterval(function() {
        console.log((total-Date.now()/1000)+' tiempo restante');
      }, 3000);
        setTimeout(function(){
          clearInterval(interval);
        }, (60000*2+60000/2));
      console.log("Timer ended");
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
