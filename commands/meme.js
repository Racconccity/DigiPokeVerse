const Discord = require("discord.js");
const config = require("../config.json");
const colours = require("../colours.json");
const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch')

module.exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Espera ansias....")

    let reddit = [
        "meme",
        "animemes",
        "dankmemes",
        "unexpected"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];

    randomPuppy(subreddit).then(url => {
        snekfetch.get(url).then(async res => {
            await message.channel.send({
                files: [{
                    attachment: res.body,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
        }).catch(err => console.error(err));
    }).catch(err => console.error(err));
};

module.exports.config = {
    name: "meme",
    usage: "-meme",
    aliases: ["mem", "memedesc"]
}