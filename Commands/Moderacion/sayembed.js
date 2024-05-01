const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("sayembed")
      .setDescription("Envia un mensaje con el bot en un embed!")
      .addStringOption((option) => option.setName("mensaje").setDescription("Pon el mensaje que deseas enviar.").setRequired(true))
      .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {

        const mensaje = interaction.options.getString("mensaje")

        const embed = new EmbedBuilder()
        .setTitle(`Embed de ${interaction.member.user.username}`)
        .setDescription(`${mensaje}`)
        .setColor("#00FF00")
        .setTimestamp()

        await interaction.reply({embeds: [embed]})
    },
  };