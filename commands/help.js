const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField('omar', 'El mejor', true)
        .addField('mario', 'El segundo mejor', true)
        .addField('help', 'Muestra la lista de comandos', true)
        .addField('user', 'Muestra información sobre el usuario', true)
        .addField('server', 'Muestra información del servidor', true)
        .addField('meme', 'Busca memes aleatorios de páginas web', true)
        .addField('avatar', 'Muestra el avatar del usuario', true)
        .addField('limpiar', 'Elimina la contidad de mensajes que especifíques del chat', true)
        .addField('digimons', 'Aparece un digimon random', true)
        .addField('pokemons', 'Aparece un pokémon random', true)
        .addField('di', 'Repite una frase que haya escrito el usuario', true)
        .addField('Invitacion; ', '(https://discord.gg/zdpRdZQ)', true)
        .setFooter("Versión de mis cojones", client.user.avatarURL)
        .setColor(colours.Black)

    message.author.send(embed);
}

module.exports.config = {
    name: "help",
    usage: "-help",
    aliases: ["h", "help", "helpdesc"]
}
