const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async (client,message,args) => {
    var server = message.guild;
    const embed = new Discord.RichEmbed()

    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
        .addField('ID', server.id, true)
        .addField('Región', server.region, true)
        .addField('Creado el', server.joinedAt.toDateString(), true)
        .addField('Dueño del server', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
        .addField('Miembros', server.memberCount, true)
        .addField('Roles', server.roles.size, true)
    .setColor(colours.White)
   message.channel.send({embed});
}

module.exports.config = {
    name: "server",
    aliases: ["si", "serverdesc"]
}