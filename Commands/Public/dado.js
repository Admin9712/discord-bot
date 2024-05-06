const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("dado")
      .setDescription("🎲 Tira el dado!"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {
    
        const dados = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
        ];

        const dadosR = dados[Math.floor(Math.random() * dados.length)];

        const embed = new EmbedBuilder()
        .setAuthor({ name: `${interaction.user.username} ha tirado el dado`, iconURL: interaction.user.avatarURL({ dynamic: true })})
        .addFields(
            {name: '🎲 - Dado:', value: `\`\`\`${dadosR}\`\`\``},
        )
        .setColor("Random")
        .setTimestamp()

        await interaction.reply({ embeds: [embed]})

    },
  };