const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("dados")
      .setDescription("🎲 Tira los dados!"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {
    
        const dados = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
        ];

        const dadosR = dados[Math.floor(Math.random() * dados.length)];

        const embed = new EmbedBuilder()
        .setAuthor({ name: `${interaction.user.username} ha tirado los dados`, iconURL: interaction.user.avatarURL({ dynamic: true })})
        .addFields(
            {name: '🎲 - Dados:', value: `\`\`\`${dadosR}\`\`\``},
        )
        .setColor("Random")
        .setTimestamp()

        await interaction.reply({ embeds: [embed]})

    },
  };