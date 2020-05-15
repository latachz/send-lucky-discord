require('dotenv').config();
const Discord = require('discord.js');
const fetch = require("node-fetch");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const config = require("./config.json");

const url = "https://get-lucky.netlify.com/.netlify/functions/get"

let date = new Date();
let hour = date.getHours();

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

    bot.login(TOKEN);

    fetch(url)
        .then(res => res.json())
        .then(r => {
            var lucky = r.data
            if (msg.content === '!lucky') {
                var date = lucky.date.split(" ")
                msg.channel.send(`Dzisiaj (${date[0]}) szczęśliwy numerek ma numer ${lucky.luckyNumber} - ${config[lucky.luckyNumber]}`);
            }
        })
});

bot.login(TOKEN);