const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    message.channel.send("You obtain "  + Math.floor(Math.random()*(99+1)) +  " coins")
}

module.exports.config = {
    name: "coin",
    usage: "-coin",
    aliases: ["coin"]
}
