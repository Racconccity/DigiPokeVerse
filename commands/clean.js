const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    let quan = parseInt(args[0]);
    message.channel.bulkDelete(quan);
}

module.exports.config = {
    name: "clean",
    usage: "-clean",
    aliases: ["clean", "cl"]
}
