const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
  var objetos = ["White", "Red", "Black", "Purple", "Grey", "Yellow", "Blue"]

  for (var n = 0; n < objetos.length; n++) {
    message.channel.send(objetos[Math.floor(Math.random() * objetos.length)])
  }
}

module.exports.config = {
    name: "randomobj",
    usage: "-random",
    aliases: ["randomobj"]
}
