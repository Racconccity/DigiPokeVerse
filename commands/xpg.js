const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    message.channel.send("Obtienes "  + Math.floor(Math.random()* 2000) + 599 +  " puntos de experiencia")
}

module.exports.config = {
    name: "xpg",
    usage: "-xpg",
    aliases: ["xpg"]
}
