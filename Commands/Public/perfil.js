const { ChatInputCommandInteraction, SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const { profileImage } = require("discord-arts");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("perfil")
      .setDescription("Te enseña tu perfil o el de otro usuario!")
      .addUserOption((option) => option.setName(`usuario`).setDescription(`El usuario del que quieres ver el perfil`)),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {
   
        const user = interaction.options.getUser(`usuario`) || interaction.user;

        const buffer = await profileImage(user.id, {
            squareAvatar: true,
            removeAvatarFrame: false,
            overwriteBadges: true,
            badgesFrame: true,
        });

        interaction.reply({ files: [new AttachmentBuilder(buffer)] });

    },
  };