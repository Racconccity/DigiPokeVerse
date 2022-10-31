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
        /*First gen*/
        "Bulbasaur.png","Ivysaur.png","Venusaur.png","Charmander.png","Charmeleon.png","Charizard.png","Squirtle.png","Wartortle.png","Blastoise.png","Caterpie.png","Metapod.png",
        "Butterfree.png","Weedle.png","Kakuna.png","Beedrill.png","Pidgey.png","Pidgeotto.png","Pidgeot.png","Rattata.png","Raticate.png","Spearow.png","Fearow.png","Ekans.png","Arbok.png",
        "Pikachu.png","Raichu.png","Sandshrew.png","Sandslash.png","Nidoran♀.png","Nidorina.png","Nidoqueen.png","Nidoran♂.png","Nidorino.png","Nidoking.png","Clefairy.png","Clefable.png",
        "Vulpix.png","Ninetales.png","Jigglypuff.png","Wigglytuff.png","Zubat.png","Golbat.png","Oddish.png","Gloom.png","Vileplume.png","Paras.png","Parasect.png","Venonat.png",
        "Venomoth.png","Diglett.png","Dugtrio.png","Meowth.png","Persian.png","Psyduck.png","Golduck.png","Mankey.png","Primeape.png","Growlithe.png","Arcanine.png","Poliwag.png",
        "Poliwhirl.png","Poliwrath.png","Abra.png","Kadabra.png","Alakazam.png","Machop.png","Machoke.png","Machamp.png","Bellsprout.png","Weepinbell.png",
        "Victreebel.png","Tentacool.png","Tentacruel.png","Geodude.png","Graveler.png","Golem.png","Ponyta.png","Rapidash.png","Slowpoke.png","Slowbro.png",
        "Magnemite.png","Magneton.png","Farfetch'd.png","Doduo.png","Dodrio.png","Seel.png","Dewgong.png","Grimer.png","Muk.png","Shellder.png","Cloyster.png",
        "Gastly.png","Haunter.png","Gengar.png","Onix.png","Drowzee.png","Hypno.png","Krabby.png","Kingler.png","Voltorb.png","Electrode.png","Exeggcute.png",
        "Exeggutor.png","Cubone.png","Marowak.png","Hitmonlee.png","Hitmonchan.png","Lickitung.png","Koffing.png","Weezing.png","Rhyhorn.png","Rhydon.png","Chansey.png",
        "Tangela.png","Kangaskhan.png","Horsea.png","Seadra.png","Goldeen.png","Seaking.png","Staryu.png","Starmie.png","Mr Mime.png","Scyther.png","Jynx.png",
        "Electabuzz.png","Magmar.png","Pinsir.png","Tauros.png","Magikarp.png","Gyarados.png","Lapras.png","Ditto.png","Eevee.png","Vaporeon.png","Jolteon.png",
        "Flareon.png","Porygon.png","Omanyte.png","Omastar.png","Kabuto.png","Kabutops.png","Aerodactyl.png","Snorlax.png","Articuno.png","Zapdos.png","Moltres.png",
        "Dratini.png","Dragonair.png","Dragonite.png","Mewtwo.png","Mew.png",
        /*Second gen*/
        "Chikorita.png","Bayleef.png","Meganium.png","Cyndaquil.png","Quilava.png","Typhlosion.png","Totodile.png","Croconaw.png","Feraligatr.png","Sentret.png",
        "Furret.png","Hoothoot.png","Noctowl.png","Ledyba.png","Ledian.png","Spinarak.png","Ariados.png","Crobat.png","Chinchou.png","Lanturn.png","Pichu.png",
        "Cleffa.png","Igglybuff.png","Togepi.png","Togetic.png","Natu.png","Xatu.png","Mareep.png","Flaaffy.png","Ampharos.png","Bellossom.png","Marill.png","Azumarill.png",
        "Sudowoodo.png","Politoed.png","Hoppip.png","Skiploom.png","Jumpluff.png","Aipom.png","Sunkern.png","Sunflora.png","Yanma.png","Wooper.png","Quagsire.png",
        "Espeon.png","Umbreon.png","Murkrow.png","Slowking.png","Misdreavus.png","Wobbuffet.png","Girafarig.png","Pineco.png","Forretress.png","Dunsparce.png",
        "Gligar.png","Steelix.png","Snubbull.png","Granbull.png","Qwilfish.png","Scizor.png","Shuckle.png","Heracross.png","Sneasel.png","Teddiursa.png","Ursaring.png",
        "Slugma.png","Magcargo.png","Swinub.png","Piloswine.png","Corsola.png","Remoraid.png","Octillery.png","Delibird.png","Mantine.png","Skarmory.png","Houndour.png",
        "Houndoom.png","Kingdra.png","Phanpy.png","Donphan.png","Porygon2.png","Stantler.png","Smeargle.png","Tyrogue.png","Hitmontop.png","Smoochum.png","Elekid.png",
        "Magby.png","Miltank.png","Blissey.png","Raikou.png","Entei.png","Suicune.png","Larvitar.png","Pupitar.png","Tyranitar.png","Lugia.png","Ho-Oh.png","Celebi.png",
        /*Third gen*/
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
        "Latios.png","Kyogre.png","Groudon.png","Rayquaza.png","Jirachi.png","Deoxys Normal.png",
        /*Fourth gen*/
        "Turtwig.png","Grotle.png","Torterra.png","Chimchar.png","Monferno.png","Infernape.png","Piplup.png","Prinplup.png","Empoleon.png","Starly.png","Staravia.png","Staraptor.png",
        "Bidoof.png","Bibarel.png","Kricketot.png","Kricketune.png","Shinx.png","Luxio.png","Luxray.png","Budew.png","Roserade.png","Cranidos.png","Rampardos.png","Shieldon.png","Bastiodon.png",
        "Mothim.png","Combee.png","Vespiquen.png","Pachirisu.png","Buizel.png","Floatzel.png","Cherubi.png","Ambipom.png","Drifloon.png","Drifblim.png","Buneary.png","Lopunny.png","Mismagius.png",
        "Honchkrow.png","Glameow.png","Purugly.png","Chingling.png","Stunky.png","Skuntank.png","Bronzor.png","Bronzong.png","Bonsly.png","Mime Jr.png","Happiny.png","Chatot.png","Spiritomb.png",
        "Gible.png","Gabite.png","Garchomp.png","Munchlax.png","Riolu.png","Lucario.png","Hippopotas.png","Hippowdon.png","Skorupi.png","Drapion.png","Croagunk.png","Toxicroak.png","Carnivine.png",
        "Finneon.png","Lumineon.png","Mantyke.png","Snover.png","Abomasnow.png","Weavile.png","Magnezone.png","Lickilicky.png","Rhyperior.png","Tangrowth.png","Electivire.png","Magmortar.png","Togekiss.png",
        "Yanmega.png","Leafeon.png","Glaceon.png","Gliscor.png","Mamoswine.png","Porygon-Z.png","Gallade.png","Probopass.png","Dusknoir.png","Froslass.png","Rotom Normal.png","Uxie.png","Mesprit.png",
        "Azelf.png","Dialga.png","Palkia.png","Heatran.png","Regigigas.png","Giratina Altered Form.png","Cresselia.png","Phione.png","Manaphy.png","Darkrai.png","Shaymin Land Form.png","Arceus.png",
        /*Fifth gen*/
        "Snivy.png","Servine.png","Serperior.png","Tepig.png","Pignite.png","Emboar.png","Oshawott.png","Dewott.png","Samurott.png","Patrat.png","Watchog.png","Lillipup.png",
        "Herdier.png","Stoutland.png","Purrloin.png","Liepard.png","Pansage.png","Simisage.png","Pansear.png","Simisear.png","Panpour.png","Simipour.png","Munna.png","Musharna.png",
        "Pidove.png","Tranquill.png","Unfezant.png","Blitzle.png","Zebstrika.png","Roggenrola.png","Boldore.png","Gigalith.png","Woobat.png","Swoobat.png","Drilbur.png","Excadrill.png",
        "Audino.png","Timburr.png","Gurdurr.png","Conkeldurr.png","Tympole.png","Palpitoad.png","Seismitoad.png","Throh.png","Sawk.png","Sewaddle.png","Swadloon.png","Leavanny.png",
        "Venipede.png","Whirlipede.png","Scolipede.png","Cottonee.png","Whimsicott.png","Petilil.png","Lilligant.png","Sandile.png","Krokorok.png","Krookodile.png",
        "Darumaka.png","Darmanitan.png","Maractus.png","Dwebble.png","Crustle.png","Scraggy.png","Scrafty.png","Sigilyph.png","Yamask.png","Cofagrigus.png","Tirtouga.png","Carracosta.png",
        "Archen.png","Archeops.png","Trubbish.png","Garbodor.png","Zorua.png","Zoroark.png","Minccino.png","Cinccino.png","Gothita.png","Gothorita.png","Gothitelle.png","Solosis.png",
        "Duosion.png","Reuniclus.png","Ducklett.png","Swanna.png","Vanillite.png","Vanillish.png","Vanilluxe.png","Emolga.png","Karrablast.png","Escavalier.png",
        "Foongus.png","Amoonguss.png","Frillish.png","Jellicent.png","Alomomola.png","Joltik.png","Galvantula.png","Ferroseed.png","Ferrothorn.png","Klink.png","Klang.png","Klinklang.png",
        "Tynamo.png","Eelektrik.png","Eelektross.png","Elgyem.png","Beheeyem.png","Litwick.png","Lampent.png","Chandelure.png","Axew.png","Fraxure.png","Haxorus.png","Cubchoo.png",
        "Beartic.png","Cryogonal.png","Shelmet.png","Accelgor.png","Stunfisk.png","Mienfoo.png","Mienshao.png","Druddigon.png","Golett.png","Golurk.png","Pawniard.png","Bisharp.png",
        "Bouffalant.png","Rufflet.png","Braviary.png","Vullaby.png","Mandibuzz.png","Heatmor.png","Durant.png","Deino.png","Zweilous.png","Hydreigon.png","Larvesta.png","Volcarona.png",
        "Cobalion.png","Terrakion.png","Virizion.png","Tornadus Incarnate Form.png","Thundurus Incarnate Form.png","Reshiram.png","Zekrom.png","Landorus Incarnate Form.png","Kyurem.png",
        "Keldeo Ordinary Form.png","Meloetta Aria Form.png","Victini.png","Genesect.png",
        /*Sixth gen*/
        "Chespin.png","Quilladin.png","Chesnaught.png","Fennekin.png","Braixen.png","Delphox.png","Froakie.png","Frogadier.png","Greninja.png","Bunnelby.png","Diggersby.png","Fletchling.png",
        "Fletchinder.png","Talonflame.png","Scatterbug.png","Spewpa.png","Vivillon Meadow.png","Litleo.png","Pyroar.png","Flabébé Red Flower.png","Floette Red Flower.png",
        "Florges Red Flower.png","Skiddo.png","Gogoat.png","Pancham.png","Pangoro.png","Furfrou.png","Espurr.png","Meowstics.png","Honedge.png","Doublade.png","Spritzee.png",
        "Aromatisse.png","Swirlix.png","Slurpuff.png","Inkay.png","Malamar.png","Binacle.png","Barbaracle.png","Skrelp.png","Dragalge.png","Clauncher.png","Clawitzer.png","Helioptile.png",
        "Heliolisk.png","Tyrunt.png","Tyrantrum.png","Amaura.png","Aurorus.png","Sylveon.png","Hawlucha.png","Dedenne.png","Carbink.png","Goomy.png","Sliggoo.png","Goodra.png","Klefki.png",
        "Phantump.png","Trevenant.png","Pumpkaboo.png","Gourgeist.png","Bergmite.png","Avalugg.png","Noibat.png","Noivern.png","Xerneas.png","Yveltal.png","Zygarde.png","Diancie.png",
        "Hoopa Confined.png","Volcanion.png",
        /*Seventh gen*/
        "Rowlet.png","Dartrix.png","Decidueye.png","Littenv","Torracat.png","Incineroar.png","Popplio.png","Brionne.png","Primarina.png","Pikipek.png","Trumbeak.png","Toucannon.png",
        "Yungoos.png","Gumshoos.png","Grubbin.png","Charjabug.png","Vikavolt.png","Crabrawler.png","Crabominable.png","Cutiefly.png","Ribombee.png","Rockruff.png",
        "Lycanroc.png","Mareanie.png","Toxapex.png","Mudbray.png","Mudsdale.png","Dewpider.png","Araquanid.png","Fomantis.png","Lurantis.png","Morelull.png",
        "Shiinotic.png","Salandit.png","Salazzle.png","Stufful.png","Bewear.png","Bounsweet.png","Steenee.png","Tsareena.png","Comfey.png","Oranguru.png","Passimian.png","Wimpod.png","Golisopod.png",
        "Sandygast.png","Palossand.png","Pyukumuku.png","Type Null.png","Silvally.png","Komala.png","Turtonator.png","Togedemaru.png","Mimikyu Disguised Form.png","Bruxish.png","Drampa.png",
        "Dhelmise.png","Jangmo-o.png","Hakamo-o.png","Kommo-o.png","Tapu Koko.png","Tapu Lele.png","Tapu Bulu.png","Tapu Fini.png","Cosmog.png","Cosmoem.png","Solgaleo.png",
        "Lunala.png","Nihilego.png","Buzzwole.png","Pheromosa.png","Xurkitree.png","Celesteela.png","Kartana.png","Guzzlord.png","Necrozma.png","Magearna.png","Marshadow.png",
        "Poipole.png","Naganadel.png","Stakataka.png","Blacephalon.png","Zeraora.png","Meltan.png","Melmetal.png",
        /*Eighth gen*/
        "Grookey.png","Thwackey.png","Rillaboom.png","Scorbunny.png","Raboot.png","Cinderace.png","Sobble.png","Drizzile.png","Inteleon.png","Skwovet.png","Greedent.png","Rookidee.png",
        "Corvisquire.png","Corviknight.png","Blipbug.png","Dottler.png","Orbeetle.png","Nickit.png","Thievul.png","Gossifleur.png","Eldegoss.png","Wooloo.png","Dubwool.png",
        "Chewtle.png","Drednaw.png","Yamper.png","Boltund.png","Rolycoly.png","Carkol.png","Coalossal.png","Applin.png","Flapple.png","Appletun.png","Silicobra.png","Sandaconda.png",
        "Cramorant.png","Arrokuda.png","Barraskewda.png","Toxel.png","Toxtricity.png","Sizzlipede.png","Centiskorch.png","Clobbopus.png","Grapploct.png","Sinistea.png","Polteageist.png","Hatenna.png",
        "Hattrem.png","Hatterene.png","Impidimp.png","Morgrem.png","Grimmsnarl.png","Obstagoon.png","Perrserker.png","Cursola.png","Sirfetch'd.png","Mr Rime.png","Runerigus.png",
        "Milcery.png","Alcremie.png","Falinks.png","Pincurchin.png","Snom.png","Frosmoth.png","Stonjourner.png","Eiscue.png","Indeedee♂.png","Indeedee♀.png","Morpek.png","Cufant.png","Copperajah.png",
        "Dracozolt.png","Arctozolt.png","Dracovish.png","Arctovish.png","Duraludon.png","Dreepy.png","Drakloak.png","Dragapult.png","Zacian.png","Zamazenta.png","Eternatus.png",
        "Kubfu.png","Zarude.png","Regieleki.png","Regidrago.png","Glastrier.png","Spectrier.png","Calyrex.png","Wyrdeer.png","Kleavor.png","Overqwil.png",
        "Ursaluna.png","Basculegion.png","Basculegion♂.png","Basculegion♀.png","Sneasler.png","Enamorus Incarnate Form.png",
        /*Ninth gen*/
        "Sprigatito.png","Fuecoco.png","Quaxly.png","Koraidon.png","Miraidon.png","Lechonk.png","Pawmi.png","Smoliv.png","Cetitan.png","Fidough.png","Greavard.png",
        "Cyclizar.png","Grafaiai.png","Klawf.png","Armarouge.png","Ceruledge.png","Wiglett.png","Farigiraf.png","Bellibolt.png",
        /*Alternative Forms*/
        "Castform Sunny Form.png","Castform Rainy Form.png","Castform Snowy Form.png","Burmy Plant Cloak.png","Burmy Sandy Cloak.png","Burmy Trash Cloak.png","Cherrim Overcast Form.png",
        "Cherrim Sunshine Form.png","Darmanitan Unovan Form.png","Meloetta Pirouette Form.png","Aegislash Blade Form.png","Aegislash Shield Form.png","Primal Groudon.png",
        "Primal Kyogre.png","Zygarde 10 Form.png","Zygarde Complete Form.png","Zygarde Cell.png","Zygarde Core.png","Ash Greninja.png","Giratina Origin Form.png","Shaymin Sky Form.png",
        "Deoxys Attack.png","Deoxys Defense.png","Deoxys Speed.png","Rotom Heat.png","Rotom Wash.png","Rotom Frost.png","Rotom Fan.png","Rotom Mow.png","Deerling Spring Form.png",
        "Deerling Summer Form.png","Deerling Autumn Form.png","Deerling Winter Form.png","Sawsbuck Spring Form.png","Sawsbuck Summer Form.png","Sawsbuck Autumn Form.png",
        "Sawsbuck Winter Form.png","Keldeo Resolute Form.png","Hoopa Unbound.png","Tornadus Therian Form.png","Thundurus Therian Form.png","Landorus Therian Form.png","Black Kyurem.png",
        "White Kyurem.png","Furfrou Star.png","Furfrou Heart.png","Furfrou Diamond.png","Furfrou Dandy.png","Furfrou Matron.png","Furfrou Debutante.png","Furfrou Pharaoh.png",
        "Furfrou La Reine.png","Furfrou Kabuki.png","Pikachu RockStar.png","Pikachu Belle.png","Pikachu PopStar.png","Pikachu PhD.png","Pikachu Libre.png","Shellos West Sea.png",
        "Shellos East Sea.png","Gastrodon West Sea.png","Gastrodon East Sea.png","Wormadam Plant Cloak.png","Wormadam Sandy Cloak.png","Wormadam Trash Cloak.png","Basculin Red-Striped Form.png",
        "Basculin Blue-Striped Form.png","Vivillon Continental.png","Vivillon Archipelago.png","Vivillon Elegant.png","Vivillon Fancy.png","Vivillon Garden.png","Vivillon High Plains.png",
        "Vivillon Icy Snow.png","Vivillon Jungle.png","Vivillon Marine.png","Vivillon Modern.png","Vivillon Monsoon.png","Vivillon Ocean.png","Vivillon PokeBall.png","Vivillon Polar.png",
        "Vivillon River.png","Vivillon Sandstorm.png","Vivillon Savanna.png","Vivillon Sun.png","Vivillon Tundra.png","Flabébé Blue Flower.png","Flabébé Yellow Flower.png",
        "Flabébé Orange Flower.png","Flabébé White Flower.png","Floette White Flower.png","Floette Blue Flower.png","Floette Yellow Flower.png","Floette Orange Flower.png",
        "Floette Eternal Flower.png","Florges Blue Flower.png","Florges Yellow Flower.png","Florges Orange Flower.png","Florges White Flower.png","Wishiwashi Solo Form.png",
        "Wishiwashi School Form.png","Mimikyu Busted Form.png","Necrozma Dusk Mane.png","Necrozma Dawn Wings.png","Necrozma Ultra.png","Oricorio Baile.png","Oricorio Pom-Pom.png",
        "Oricorio Pa'u.png","Oricorio Sensu.png","Lycanroc Midday Form.png","Lycanroc Midnight Form.png","Lycanroc Dusk Form.png","Magearna Original Color.png","Minior Meteor Form.png",
        "Minior Core Red.png","Minior Core Orange.png","Minior Core Yellow.png","Minior Core Green.png","Minior Core Blue.png","Minior Core Purple.png","Zacian Sword Form.png","Zamazenta Shield Form.png",
        "Urshifu Single Strike.png","Urshifu Rapid Strike.png","Calyrex Ice Rider.png","Calyrex Shadow Rider.png","Morpeko Full Belly Form.png","Morpeko Hangry Form.png","Pikachu Cap Original.png",
        "Pikachu Cap Hoenn.png","Pikachu Cap Sinnoh.png","Pikachu Cap Unova.png","Pikachu Cap Kalos.png","Pikachu Cap Alola.png","Pikachu Cap Partner.png","Pikachu Cap World.png",
        "Spiky-eared Pichu.png","Rotom Pokedex.png","Rotom Phone.png","Galarian Darmanitan Zen.png","Toxtricity Amped.png","Toxtricity Low Key.png","Eiscue Noice Face.png","Reshiram Activated.png",
        "Zekrom Activated.png","Solgaleo Radiant Sun Phase.png","Lunala Full Moon Phase.png","Marshadow Zenith.png","White Kyurem Activated.png","Black  Kyurem Activated.png","Palkia Origin Form.png",
        "Dialga Origin Form.png","Enamorus Therian Form.png","Mewtwo Armored.png","Basculin White-Striped Form.png",
        /*Unowns*/
        "Unown A.png","Unown B.png","Unown C.png","Unown D.png","Unown E.png","Unown F.png","Unown G.png","Unown H.png","Unown I.png","Unown J.png","Unown K.png","Unown L.png",
        "Unown M.png","Unown N.png","Unown O.png","Unown P.png","Unown Q.png","Unown R.png","Unown S.png","Unown T.png","Unown U.png","Unown V.png","Unown W.png","Unown X.png",
        "Unown Y.png","Unown Z.png","Unown !.png","Unown ¿.png",
        /*Regional Forms*/
        "Alolan Rattata.png","Alolan Raticate.png","Alolan Raichu.png","Alolan Sandshrew.png","Alolan Sandslash.png","Alolan Vulpix.png","Alolan Ninetales.png","Alolan Diglett.png",
        "Alolan Dugtrio.png","Alolan Meowth.png","Alolan Persian.png","Alolan Geodude.png","Alolan Graveler.png","Alolan Golem.png","Alolan Grimer.png","Alolan Muk.png",
        "Alolan Exeggutor.png","Alolan Marowak.png","Galarian Meowth.png","Galarian Ponyta.png","Galarian Rapidash.png","Galarian Slowpoke.png","Galarian Slowbro.png","Galarian Farfetch'd.png",
        "Galarian Weezing.png","Galarian Mr Mime.png","Galarian Articuno.png","Galarian Zapdos.png","Galarian Moltre.png","Galarian Slowking.png","Galarian Corsola.png",
        "Galarian Zigzagoon.png","Galarian Linoone.png","Galarian Darumaka.png","Galarian Darmanitan.png","Galarian Yamask.png","Galarian Stunfisk.png","Hisui Decidueye.png",
        "Hisui Growlithe.png","Hisui Braviary.png","Hisui Voltorb.png","Hisui Zorua.png","Hisui Zoroark.png","Hisui Typhlosion.png","Hisui Samurott.png","Hisui Qwilfish.png","Hisui Lilligant.png",
        "Hisui Sliggoo.png","Hisui Goodra.png","Hisui Arcanine.png",".png","Hisui Electrode.png","Hisui Sneasel.png","Hisui Avalugg.png","Paldean Wooper.png",
        /*Mega*/
        "Mega-Venusaur.png","Mega-Charizard X.png","Mega-Charizard Y.png","Mega-Blastoise.png","Mega-Alakazam.png","Mega-Gengar.png","Mega-Kangaskhan.png","Mega-Pinsir.png",
        "Mega-Gyarados.png","Mega-Aerodactyl.png","Mega-Mewtwo X.png","Mega-Mewtwo Y.png","Mega-Ampharos.png","Mega-Scizor.png","Mega-Heracross.png","Mega-Houndoom.png",
        "Mega-Tyranitar.png","Mega-Blaziken.png","Mega-Gardevoir.png","Mega-Mawile.png","Mega-Aggron.png","Mega-Medicham.png","Mega-Manectric.png","Mega-Banette.png","Mega-Absol.png",
        "Mega-Garchomp.png","Mega-Lucario.png","Mega-Abomasnow.png","Mega-Beedrill.png","Mega-Pidgeot.png","Mega-Slowbro.png","Mega-Steelix.png","Mega-Sceptile.png","Mega-Swampert.png",
        "Mega-Sableye.png","Mega-Sharpedo.png","Mega-Camerupt.png","Mega-Altaria.png","Mega-Glalie.png","Mega-Salamence.png","Mega-Metagross.png","Mega-Latias.png","Mega-Latios.png",
        "Mega-Rayquaza.png","Mega-Lopunny.png","Mega-Gallade.png","Mega-Audino.png","Mega-Diancie.png",
        /*Gigamax*/
        "Venusaur Gigamax.png","Charizard Gigamax.png","Blastoise Gigamax.png","Butterfree Gigamax.png","Pikachu Gigamax.png","Meowth Gigamax.png","Machamp Gigamax.png","Gengar Gigamax.png",
        "Kingler Gigamax.png","Lapras Gigamax.png","Eevee Gigamax.png","Snorlax Gigamax.png","Garbodor Gigamax.png","Melmetal Gigamax.png","Corviknight Gigamax.png","Orbeetle Gigamax.png",
        "Drednaw Gigamax.png","Coalossal Gigamax.png","Flapple Gigamax.png","Appletun Gigamax.png","Sandaconda Gigamax.png","Toxtricity Gigamax.png","Centiskorch Gigamax.png",
        "Hatterene Gigamax.png","Grimmsnarl Gigamax.png","Alcremie Gigamax.png","Copperajah Gigamax.png","Duraludon Gigamax.png","Urshifu Single Strike Style.png",
        "Urshifu Rapid Strike Style Gigamax.png","Eternatus Gigamax.png"
    ]
    const img = randomimg[Math.floor(Math.random() * randomimg.length - 1 + 1)]
    message.channel.send("--------------------------------------------------")
    message.channel.send("The Pokemon is: " + img.replace(/\.[^.$]+$/, ''))
    message.channel.send("►Level: "   + Math.floor(Math.random()*(99+1)))
    message.channel.send("►Attack: "  + Math.floor(Math.random()*(149+1))     + "  " + "►Defense: " + Math.floor(Math.random()*(149+1)))
    message.channel.send("►Special: "+ Math.floor(Math.random()*(149+1))     + "  " + "►Speed: " + Math.floor(Math.random()*(149+1)))
    message.channel.send("►Spe. Attack: "+ Math.floor(Math.random()*(149+1))   + "  " + "►Spe. Defense: " + Math.floor(Math.random()*(149+1)))
    message.channel.send({ file: ["Pokemon/"] + img })
}

module.exports.config = {
    name: "pokemons",
    usage: "-pokemons",
    aliases: ["po","poke"]
}
