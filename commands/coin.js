const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    message.channel.send("Obtienes: "  + Math.floor(Math.random()*(99+1)) +  " monedas de cobre")
}

module.exports.config = {
    name: "coin",
    usage: "-coin",
    aliases: ["coin"]
}
