const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");

module.exports.run = async(client, message, args) => {
      var myArray = [
        "Hacha", "Escudo", "Espada"
      ];

    function getRandomString(array){
      return array[Math.floor(Math.random()*array.length)]
    }

    function getRandomStrings(numero, array){
      var strings = [];
      while(strings.length < numero){
        var string = getRandomString(array);
        if(strings.indexOf(string) == -1) strings.push(string);
      }
        return strings;
    }

    console.log(getRandomStrings(4, myArray));
}

module.exports.config = {
    name: "random",
    usage: "-random",
    aliases: ["random"]
}
