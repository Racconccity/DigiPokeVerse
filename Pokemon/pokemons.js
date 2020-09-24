const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const window = require("window");
const randomFile = require('random-file');
const path = require('path');
const fs = require('fs');

module.exports.run = async(client, message, args) => {
    var randomimg = path.join(__dirname, 'Pokemon/');
    randomimg = [
        /*Primera gen*/
        "Bulbasaur.png","Ivysaur.png","Venusaur.png","Charmander.png","Charmeleon.png","Charizard.png","Squirtle.png","Wartortle.png","Blastoise.png",
        "Caterpie.png","Metapod.png","Butterfree.png","Weedle.png","Kakuna.png","Beedrill.png","Pidgey.png","Pidgeotto.png","Pidgeot.png","Rattata.png",
        "Raticate.png","Spearow.png","Fearow.png","Ekans.png","Arbok.png","Pikachu.png","Raichu.png","Sandshrew.png","Sandslash.png","Nidoran♀.png",
        "Nidorina.png","Nidoqueen.png","Nidoran♂.png","Nidorino.png","Nidoking.png","Clefairy.png","Clefable.png","Vulpix.png","Ninetales.png","Jigglypuff.png",
        "Wigglytuff.png","Zubat.png","Golbat.png","Oddish.png","Gloom.png","Vileplume.png","Paras.png","Parasect.png","Venonat.png","Venomoth.png","Diglett.png",
        "Dugtrio.png","Meowth.png","Persian.png","Psyduck.png","Golduck.png","Mankey.png","Primeape.png","Growlithe.png","Arcanine.png","Poliwag.png",
        "Poliwhirl.png","Poliwrath.png","Abra.png","Kadabra.png","Alakazam.png","Machop.png","Machoke.png","Machamp.png","Bellsprout.png","Weepinbell.png",
        "Victreebel.png","Tentacool.png","Tentacruel.png","Geodude.png","Graveler.png","Golem.png","Ponyta.png","Rapidash.png","Slowpoke.png","Slowbro.png",
        "Magnemite.png","Magneton.png","Farfetch'd.png","Doduo.png","Dodrio.png","Seel.png","Dewgong.png","Grimer.png","Muk.png","Shellder.png","Cloyster.png",
        "Gastly.png","Haunter.png","Gengar.png","Onix.png","Drowzee.png","Hypno.png","Krabby.png","Kingler.png","Voltorb.png","Electrode.png","Exeggcute.png",
        "Exeggutor.png","Cubone.png","Marowak.png","Hitmonlee.png","Hitmonchan.png","Lickitung.png","Koffing.png","Weezing.png","Rhyhorn.png","Rhydon.png","Chansey.png",
        "Tangela.png","Kangaskhan.png","Horsea.png","Seadra.png","Goldeen.png","Seaking.png","Staryu.png","Starmie.png","Mr Mime.png","Scyther.png","Jynx.png",
        "Electabuzz.png","Magmar.png","Pinsir.png","Tauros.png","Magikarp.png","Gyarados.png","Lapras.png","Ditto.png","Eevee.png","Vaporeon.png","Jolteon.png",
        "Flareon.png","Porygon.png","Omanyte.png","Omastar.png","Kabuto.png","Kabutops.png","Aerodactyl.png","Snorlax.png","Articuno.png","Zapdos.png","Moltres.png",
        "Dratini.png","Dragonair.png","Dragonite.png","Mewtwo.png","Mew.png",
        /*Segunda gen*/
        "Chikorita.png","Bayleef.png","Meganium.png","Cyndaquil.png","Quilava.png","Typhlosion.png","Totodile.png","Croconaw.png","Feraligatr.png","Sentret.png",
        "Furret.png","Hoothoot.png","Noctowl.png","Ledyba.png","Ledian.png","Spinarak.png","Ariados.png","Crobat.png","Chinchou.png","Lanturn.png","Pichu.png",
        "Cleffa.png","Igglybuff.png","Togepi.png","Togetic.png","Natu.png","Xatu.png","Mareep.png","Flaaffy.png","Ampharos.png","Bellossom.png","Marill.png","Azumarill.png",
        "Sudowoodo.png","Politoed.png","Hoppip.png","Skiploom.png","Jumpluff.png","Aipom.png","Sunkern.png","Sunflora.png","Yanma.png","Wooper.png","Quagsire.png",
        "Espeon.png","Umbreon.png","Murkrow.png","Slowking.png","Misdreavus.png","Unown.png","Wobbuffet.png","Girafarig.png","Pineco.png","Forretress.png","Dunsparce.png",
        "Gligar.png","Steelix.png","Snubbull.png","Granbull.png","Qwilfish.png","Scizor.png","Shuckle.png","Heracross.png","Sneasel.png","Teddiursa.png","Ursaring.png",
        "Slugma.png","Magcargo.png","Swinub.png","Piloswine.png","Corsola.png","Remoraid.png","Octillery.png","Delibird.png","Mantine.png","Skarmory.png","Houndour.png",
        "Houndoom.png","Kingdra.png","Phanpy.png","Donphan.png","Porygon2.png","Stantler.png","Smeargle.png","Tyrogue.png","Hitmontop.png","Smoochum.png","Elekid.png",
        "Magby.png","Miltank.png","Blissey.png","Raikou.png","Entei.png","Suicune.png","Larvitar.png","Pupitar.png","Tyranitar.png","Lugia.png","Ho-Oh.png","Celebi.png"
        /*Tercera gen*/
    ]
    const img = randomimg[Math.floor(Math.random() * randomimg.length - 1 + 1)]
    message.channel.send("El pokémon es: " + img.replace(/\.[^.$]+$/, ''))
    message.channel.send({ file: ["Pokemon/"] + img })
}

module.exports.config = {
    name: "pokemons",
    usage: "-pokemons",
    aliases: ["pok", "pokedesc"]
}
