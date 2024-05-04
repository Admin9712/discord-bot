const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("avatar")
      .setDescription("Te dare el avatar de el que hayas mencionado!")
      .addUserOption((option) => option.setName(`usuario`).setDescription(`Usuario del cual quieres conseguir el avatar.`)),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {

        const usuario = interaction.options.getUser(`usuario`)

        const embed = new EmbedBuilder()
        .setTitle(`Avatar de ${usuario.username }`)
        .setImage(usuario.displayAvatarURL({size: 1024, extension: "png"}))
        .setTimestamp()
        await interaction.reply({embeds: [embed]})
    },
  };