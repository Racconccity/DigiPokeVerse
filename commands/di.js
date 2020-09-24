const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
}

module.exports.config = {
    name: "di",
    usage: "-di",
    aliases: ["d", "di", "didesc"]
}