module.exports = {
    name: "Ping",
    description: "Replies Pong",
    options: [],

    run: async(client, interaction) => {
        interaction.reply({ content: `Pong`, ephemeral: true})
    }
}