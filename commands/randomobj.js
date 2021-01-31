const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
  var listado:Array = Array("Guillermo", "Lucas", "David", "Roger", "Bruno", "Iñaki", "Alex", "Carlos");
    var Total:Number = listado.length;
    for (i=0; i&lt;Total; i++) {
      aleatorio = Math.floor(Math.random()*(listado.length));
      seleccion = listado[aleatorio];
      trace(seleccion);
      listado.splice(aleatorio, 1);
    }
    message.channel.send(aleatorio);
}

module.exports.config = {
    name: "random",
    usage: "-random",
    aliases: ["random"]
}
