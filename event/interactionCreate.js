const { InteractionType } = require("discord.js");
const fs = require("fs");

module.exports = async (client, interaction) => {
    if (!interaction.guild) return;
    if (interaction.guild.bot) return;

    if (interaction.type == InteractionType.ApplicationCommand) {
        fs.readdir("./commands", (err, files) => {
            if (err) return;
            files.forEach(async (file) => {
                let cmd = require(`../commands/${file}`);
                if (interaction.commandName.toLowerCase() == cmd.name.toLowerCase()) {
                    try {
                        return cmd.run(client, interaction);
                    } catch (err) {
                        return;
                    }
                }
            })
        })
    }
}