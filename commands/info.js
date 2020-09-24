const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"]))
        return message.channel.send("No tienes permiso, payaso")

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if (mChannel) {
        argsresult = args.join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
}

module.exports.config = {
    name: "info",
    usage: "-info",
    aliases: ["informacion", "infodesc"]
}