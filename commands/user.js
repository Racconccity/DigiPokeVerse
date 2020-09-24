const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async (client,message,args) => {
    var user = message.author;
    const embed = new Discord.RichEmbed()

    .setThumbnail(user.avatarURL)
    .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField('ID', user.id, true)
        .addField('Estado', user.presence.status, true)
        .addField('Apodo', message.member.nickname, true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
    .setColor(colours.Black)
   message.channel.send({ embed });
}

module.exports.config = {
    name: "user",
    aliases: ["si", "user"]
}