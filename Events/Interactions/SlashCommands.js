const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()){

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: "This command is outdated.",
        ephermal: true,
      });

    if (command.developer && interaction.user.id !== "422371324501950464")
      return interaction.reply({
        content: "This copmmand is only available to the developer.",
        ephermal: true,
      });

    command.execute(interaction, client);
} else if (interaction.isButton()) {
  const { buttons } = client;
  const { customId } = interaction;
  const button = buttons.get(customId);
  if(!button) return new Error(`Este boton no tiene codigo`);

  try{
    await button.execute(interaction, client);
  } catch (err) {
    console.error(err);
  }
} else {
  return
}


  },
};