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
        "Magby.png","Miltank.png","Blissey.png","Raikou.png","Entei.png","Suicune.png","Larvitar.png","Pupitar.png","Tyranitar.png","Lugia.png","Ho-Oh.png","Celebi.png",
        /*Tercera gen*/
      	"Treecko.png","Grovyle.png","Sceptile.png","Torchic.png","Combusken.png","Blaziken.png","Mudkip.png","Marshtomp.png","Swampert.png","Poochyena.png","Mightyena.png",
        "Zigzagoon.png","Linoone.png","Wurmple.png","Silcoon.png","Beautifly.png","Cascoon.png","Dustox.png","Lotad.png","Lombre.png","Ludicolo.png","Seedot.png","Nuzleaf.png",
        "Shiftry.png","Taillow.png","Swellow.png","Wingull.png","Pelipper.png","Ralts.png","Kirlia.png","Gardevoir.png","Surskit.png","Masquerain.png","Shroomish.png",
        "Breloom.png","Slakoth.png","Vigoroth.png","Slaking.png","Nincada.png","Ninjask.png","Shedinja.png","Whismur.png","Loudred.png","Exploud.png","Makuhita.png",
        "Hariyama.png","Azurill.png","Nosepass.png","Skitty.png","Delcatty.png","Sableye.png","Mawile.png","Aron.png","Lairon.png","Aggron.png","Meditite.png","Medicham.png",
        "Electrike.png","Manectric.png","Plusle.png","Minun.png","Volbeat.png","Illumise.png","Roselia.png","Gulpin.png","Swalot.png","Carvanha.png","Sharpedo.png","Wailmer.png",
        "Wailord.png","Numel.png","Camerupt.png","Torkoal.png","Spoink.png","Grumpig.png","Spinda.png","Trapinch.png","Vibrava.png","Flygon.png","Cacnea.png","Cacturne.png",
        "Swablu.png","Altaria.png","Zangoose.png","Seviper.png","Lunatone.png","Solrock.png","Barboach.png","Whiscash.png","Corphish.png","Crawdaunt.png","Baltoy.png","Claydol.png",
        "Lileep.png","Cradily.png","Anorith.png","Armaldo.png","Feebas.png","Milotic.png","Castform.png","Kecleon.png","Shuppet.png","Banette.png","Duskull.png","Dusclops.png",
        "Tropius.png","Chimecho.png","Absol.png","Wynaut.png","Snorunt.png","Glalie.png","Spheal.png","Sealeo.png","Walrein.png","Clamperl.png","Huntail.png","Gorebyss.png",
        "Relicanth.png","Luvdisc.png","Bagon.png","Shelgon.png","Salamence.png","Beldum.png","Metang.png","Metagross.png","Regirock.png","Regice.png","Registeel.png","Latias.png",
        "Latios.png","Kyogre.png","Groudon.png","Rayquaza.png","Jirachi.png","Deoxys.png",
        /*Cuarta gen*/
        "Turtwig.png","Grotle.png","Torterra.png","Chimchar.png","Monferno.png","Infernape.png","Piplup.png","Prinplup.png","Empoleon.png","Starly.png","Staravia.png","Staraptor.png",
        "Bidoof.png","Bibarel.png","Kricketot.png","Kricketune.png","Shinx.png","Luxio.png","Luxray.png","Budew.png","Roserade.png","Cranidos.png","Rampardos.png","Shieldon.png","Bastiodon.png",
        "Burmy.png","Wormadam.png","Mothim.png","Combee.png","Vespiquen.png","Pachirisu.png","Buizel.png","Floatzel.png","Cherubi.png","Cherrim.png","Shellos.png","Gastrodon.png","Ambipom.png",
        "Drifloon.png","Drifblim.png","Buneary.png","Lopunny.png","Mismagius.png","Honchkrow.png","Glameow.png","Purugly.png","Chingling.png","Stunky.png","Skuntank.png","Bronzor.png",
        "Bronzong.png","Bonsly.png","Mime Jr.png","Happiny.png","Chatot.png","Spiritomb.png","Gible.png","Gabite.png","Garchomp.png","Munchlax.png","Riolu.png","Lucario.png","Hippopotas.png",
        "Hippowdon.png","Skorupi.png","Drapion.png","Croagunk.png","Toxicroak.png","Carnivine.png","Finneon.png","Lumineon.png","Mantyke.png","Snover.png","Abomasnow.png","Weavile.png",
        "Magnezone.png","Lickilicky.png","Rhyperior.png","Tangrowth.png","Electivire.png","Magmortar.png","Togekiss.png","Yanmega.png","Leafeon.png","Glaceon.png","Gliscor.png","Mamoswine.png",
        "Porygon-Z.png","Gallade.png","Probopass.png","Dusknoir.png","Froslass.png","Rotom.png","Uxie.png","Mesprit.png","Azelf.png","Dialga.png","Palkia.png","Heatran.png","Regigigas.png",
        "Giratina.png","Cresselia.png","Phione.png","Manaphy.png","Darkrai.png","Shaymin.png","Arceus.png"
        /*Quinta gen*/

    ]
    const img = randomimg[Math.floor(Math.random() * randomimg.length - 1 + 1)]
    message.channel.send("--------------------------------------------------")
    message.channel.send("El pokémon es: " + img.replace(/\.[^.$]+$/, ''))
    message.channel.send("►Nivel: "   + Math.floor(Math.random()*(99+1)))
    message.channel.send("►Ataque: "  + Math.floor(Math.random()*(149+1))     + "  " + "►Defensa: " + Math.floor(Math.random()*(149+1)))
    message.channel.send("►Especial: "+ Math.floor(Math.random()*(149+1))     + "  " + "►Velocidad: " + Math.floor(Math.random()*(149+1)))
    message.channel.send("►Ataque Esp: "+ Math.floor(Math.random()*(149+1))   + "  " + "►Defensa Esp: " + Math.floor(Math.random()*(149+1)))
    message.channel.send("►Evasión: " + Math.floor(Math.random()*(99+1))      + "%" + "  " + "►Acierto: " + Math.floor(Math.random()*(99+1)) + "%")
    message.channel.send({ file: ["Pokemon/"] + img })
}

module.exports.config = {
    name: "pokemons",
    usage: "-pokemons",
    aliases: ["pok", "pokedesc"]
}
