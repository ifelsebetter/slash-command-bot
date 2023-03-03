const config = require("../config.js");
const { Rest } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v10");
const colors = require("colors");

module.exports = async (client) => {
    console.log(`${client.user.tag} online`.cyan);

    const rest = new REST({ version: "10" }).setToken(config.token);

    (async () => {
        try {
            await rest.put(Routes.applicationCommand(client.user)), {
                body: await client.commands,
            }
        } catch(err) {
            return;
        }
    })
    ();
}