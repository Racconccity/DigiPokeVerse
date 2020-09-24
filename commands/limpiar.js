const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    let cantidad = parseInt(args[0]);
    message.channel.bulkDelete(cantidad);
}

module.exports.config = {
    name: "limpiar",
    usage: "-limpiar",
    aliases: ["limpiar", "lim", "limpiardesc"]
}