const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, Permissions, Embed } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("moneda")
      .setDescription("Lanza una moneda y muestra el resultado!"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {
    
      const resultado = Math.random() < 0.5 ? `cara` : `cruz`;
      const caraImage = `https://media.discordapp.net/attachments/684760543026085894/1237037703057637476/monedascaraa.png?ex=663a30a3&is=6638df23&hm=fbd3dab799529d77112f9f9eedf994aed876a35a26c111f7460ed2e73f0d6fd1&=&format=webp&quality=lossless`;
      const cruzImage = `https://media.discordapp.net/attachments/684760543026085894/1237037729649524748/monedascruz.png?ex=663a30a9&is=6638df29&hm=9b1a9863563632df03c8ae04fb3e54e8346dc15d32cefa8b57b9778b8966d358&=&format=webp&quality=lossless`;

        const embed = new EmbedBuilder()
        .setTitle(`Cara o Cruz`)
        .setDescription(`>>> La moneda fue lanzada por ${interaction.user.toString()}`)
        .setColor("Random")
        .setImage(resultado === `cara` ? caraImage : cruzImage)
        .addFields(
            { name: `Que es`, value: resultado === `cara` ? `>>> Cara` : `>>> Cruz` }
        )
        .setTimestamp()

        interaction.reply(`Lanzando la moneda`);
        await delay(2000);
        await interaction.editReply({ embeds: [embed] });

    },
  }; 

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }