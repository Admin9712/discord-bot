const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("say")
      .setDescription("Envia un mensaje con el bot!")
      .addStringOption((option) => option.setName("mensaje").setDescription("Pon el mensaje que deseas enviar.").setRequired(true))
      .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {

        const mensaje = interaction.options.getString("mensaje")


        await interaction.reply(`${mensaje}`)
    },
  };