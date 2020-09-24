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
