module.exports = async(client) => {

    client.user.setActivity(`£help | ${client.guilds.cache.size} serveurs Utilisateur: ${client.users.cache.size}`,{ type: 'WATCHING' });

}