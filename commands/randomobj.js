const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
  var randomimg = path.join(__dirname, 'Pokemon/');
  randomimg = [
    "Espada","Escudo","Hacha","Pico","Palo","Lanza"
  ]
    const img = randomimg[Math.floor(Math.random() * randomimg.length - 1 + 1)]
    message.channel.send("--------------------------------------------------")
    message.channel.send("El objeto es: " + img.replace(/\.[^.$]+$/, ''))
}

module.exports.config = {
    name: "randomobj",
    usage: "-random",
    aliases: ["randomobj"]
}
