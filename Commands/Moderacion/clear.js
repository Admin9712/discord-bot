const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("clear")
      .setDescription("Comando para borrar mensajes!")
      .addIntegerOption((option) => option.setName(`cantidad`).setDescription(`Cantidad de mensajes a eliminar.`).setRequired(true).setMinValue(1).setMaxValue(99))
      .addUserOption((option) => option.setName(`usuario`).setDescription(`Usuario del cual quieres eliminar mensajes.`))
      .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {
    
        const cantidad = interaction.options.getInteger(`cantidad`)
        const user = interaction.options.getUser(`usuario`)

        const mensajes = await interaction.channel.messages.fetch()

        if(user) {
            let i = 0
            let mensajeseliminar = []
            mensajes.filter((message) => {
                if(message.author.id === user.id && cantidad > i) {
                    mensajeseliminar.push(message)
                    i++
                }
            })

            interaction.channel.bulkDelete(mensajeseliminar, true)
            .then((mensaje) => {
                interaction.reply({content: `He eliminado ${mensaje.size} de ${user.tag}.`, ephemeral: true})
            });
        } else {
            interaction.channel.bulkDelete(cantidad, true)
            .then((mensaje) => {
                interaction.reply({content: `He eliminado ${mensaje.size} mensajes.`, ephemeral: true})
            });
        }



    },
  };