const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    message.channel.send("Obtienes "  + Math.floor(Math.random() * (200 - 15 + 1) + 15) +  " puntos de experiencia")
}

module.exports.config = {
    name: "xpp",
    usage: "-xpp",
    aliases: ["xpp"]
}