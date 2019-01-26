const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("478018404645863424")
setInterval(function() {
channel.send(`Mo Salah`);
}, 30)
})

client.login(process.env.BOT_TOKEN);