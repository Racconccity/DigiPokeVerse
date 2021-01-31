const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    message.channel.send("Obtienes "  + Math.floor(Math.random()* 600) + 200 +  " puntos de experiencia")
}

module.exports.config = {
    name: "xpm",
    usage: "-xpm",
    aliases: ["xpm"]
}
