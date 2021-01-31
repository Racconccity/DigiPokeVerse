const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField('help', 'Muestra la lista de comandos', true)
        .addField('avatar', 'Muestra la imagen de perfil personal', true)
        .addField('xpp', 'Da xp entre 15 y 200', true)
        .addField('xpm', 'Da xp entre 200 y 600', true)
        .addField('xpg', 'Da xp entre 600 y 2000', true)
        .addField('coin', 'Devuelve una cantidad de 1 a 100 monedas', true)
        .addField('meme', 'Busca memes aleatorios', true)
        .addField('limpiar', 'Elimina una cantidad de mensajes', true)
        .addField('digimons', 'Aparece un digimon random', true)
        .addField('pokemons', 'Aparece un pokémon random', true)
        .addField('di', 'Repite una frase que hayas escrito', true)
        .setFooter("Versión de mis cojones :)", client.user.avatarURL)
        .setColor(colours.Black)

    message.author.send(embed);
}

module.exports.config = {
    name: "help",
    usage: "-help",
    aliases: ["help"]
}
