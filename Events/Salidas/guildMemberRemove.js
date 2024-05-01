const { ChatInputCommandInteraction, SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
  


module.exports = {
    name: "guildMemberRemove",
    once: false,
    async execute(member) {

        const channel = member.guild.channels.cache.get("1235038072924541044");
        await channel.send(`Vuelve pronto ${member.user}`);

    },
}