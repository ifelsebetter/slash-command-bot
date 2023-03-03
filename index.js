const { Client, GatewayIntentBits, ActivityType} = require("discord.js");
const config = require("config.js");
const fs = require("fs");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMembers
    ]
});

module.exports = client;

client.commands = []

fs.readdir("./commands", (err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./event/${filed}`)
        let eventName = file.split[0]
        console.log(`Event : ${eventName} Loaded`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./event/${files}`)];
    });
});

client.commands = [];

fs.readdir("./commands", (err, files) => {
    if (err) return;
    files.forEach(async (file) => {
        try {
            let cmd = require(`./commands/${file}`);
            client.commands.push({
                name: cmd.name,
                description: cmd.description,
                options: cmd.options
            });
            console.log(`Command : ${file} Loaded`);
        } catch (err) {
            return;
        }
    });
});

client.on("ready", () => {
    console.log(`${client.user.tag} Ready`.cyan)

    client.user.setPresence({
        activities: [{ name: `Idk`, type: ActivityType.Listening}],
        status: "online"
    })
})

client.log(config.token)