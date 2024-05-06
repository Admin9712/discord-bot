const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("tweet-anonimo")
      .setDescription("Crea un tweet anonimo falso!")
      .addStringOption((option) => option.setName(`tweet`).setDescription(`Escribe un tweet Max 40 caracteres`).setRequired(true)),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
    
        const canal = await interaction.guild.channels.fetch("1237063924826902538");
        let tweet = interaction.options.getString("tweet");
        let avatarUrl = client.user.displayAvatarURL({ extension: "jpg" });
        const Anonimo = "Anonimo";
        let canvas = `https://some-random-api.com/canvas/misc/tweet?avatar=${avatarUrl}&displayname=${

        Anonimo
      }&username=${Anonimo}&comment=${encodeURIComponent(
        tweet
      )}`;

      const embed = new EmbedBuilder()
      .setTitle(`Twitter`)
      .setDescription(`>>> Tweet Anonimo`)
      .setImage(canvas)
      .setColor("Blue")
      .setTimestamp()

      interaction.reply({content: `✅ Tweet enviado correctamente en el canal <#${canal.id}>`, ephemeral: true})
      await canal.send({ embeds: [embed]});

      await canal.send("`Para enviar un tweet usa /tweet o /tweet-anonimo en el canal` <#1237063924826902538>")

    },
  };