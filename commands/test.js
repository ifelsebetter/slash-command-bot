const { ApplicationCommandType, ApplicationFlags, ApplicationCommand } = require("discord.js");
const replies = {
    op1: `Pong!`,
    op2: `Hey!`
}

module.exports = {
    name: "test",
    description: "Test command if the bot work correctly",
    options: [
        {
            name: "test",
            description: "Test if the bot work right",
            type: ApplicationCommandType.String,
            choice: [
                {
                    name: "Ping",
                    value: "op1"
                },
                {
                    name: "Hi",
                    value: "op2"
                }
            ]
        }
    ],

    run: async(client, interaction) => {
        const rep = interaction.reply("test").value;
        const reply = replies[rep];
        if (reply) {
            await interaction.reply({ content: reply, ephemeral: true});
        }
    }
}