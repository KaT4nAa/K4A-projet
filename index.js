const bot = require("./config.json")
const Discord = require('discord.js');
const client = new Discord.Client();

client.login("ODQwNTEzNzI3OTQ5NDM4OTg2.YJZTaA.3pserjHBzHF9eXarjihoZhMA-qU")

const fs = require('fs');

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
  });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`)

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
    });
});

client.on("ready", () =>{
    //let embed5 = new Discord.MessageEmbed()
    //.setTitle("・🤖・𝗭𝗶𝗼𝗼𝗻-𝗜𝗻𝗳𝗼")
    //.setColor("BLACK")
    //.setDescription(`:white_check_mark: | Je suis désormais en ligne !`)
    //.setTimestamp()
    //const channel = client.channels.cache.find(channel => channel.id === "825351517971546133")
    //channel.send(embed5)
    return console.log(`Bot ${client.user.tag} désormais en ligne !`);
}) 