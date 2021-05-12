const { CommandoClient } =require('discord.js-commando')
const path = require('path')

const client = new CommandoClient({
    commandPrefix: "£",
    owner: "434626414235353088",
    invite: "https://discord.gg/gcjMGYR"
});

client.registry
    .registerDefaultTypes()
    .registerGroups()
    .registerDefaultCommands()
    .registerGroup('music', 'Music')
    .registerCommandsIn(path.join(_dirname, 'commands'));

client.server = {
    queu = [],
    currentVideo= {},
    dispatcher = null
};

client.once("ready", () => {
    console.log(`Connectée en tant que ${client.users.tag} - (${client.user.id})`);
});

client.on('error', (error) => console.log(error));

client.login('ODQwNTEzNzI3OTQ5NDM4OTg2.YJZTaA.3pserjHBzHF9eXarjihoZhMA-qU')