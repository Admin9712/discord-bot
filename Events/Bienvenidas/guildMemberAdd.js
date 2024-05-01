const { ChatInputCommandInteraction, SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
  


module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(member) {

        const channel = member.guild.channels.cache.get("1235038072924541044");
        await channel.send(`Bienvenido ${member.user}`);
        await member.roles.add("1235278418191450172");
        
    },
}