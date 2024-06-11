/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("commands > memberInfo.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Command from "../classes/Command.js";
import { EmbedBuilder } from "discord.js";

//----------------------
//  main
//----------------------
class MemberInfo extends Command {
  aliases = ["userinfo", "memberinfo"];
  cooldown = 5 * 1000;
  async run(message) {
    let member = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]) || message.member;

    if (!member) {
      message.reply("Please mention a valid member of this server.");
      return;
    }

    const embed = new EmbedBuilder()
      .setTitle(`Member Information: ${member.user.tag}`)
      .setColor("#00a368")
      .setThumbnail(member.user.displayAvatarURL())
      .addFields(
        { name: "Username", value: member.user.username, inline: true },
        { name: "Discriminator", value: `#${member.user.discriminator}`, inline: true },
        { name: "ID", value: member.id, inline: true },
        { name: "Status", value: member.presence ? member.presence.status : "Offline", inline: true },
        { name: "Bot", value: member.user.bot ? "Yes" : "No", inline: true },
        { name: "Roles", value: member.roles.cache.map(role => role.name).join(', '), inline: false },
        { name: "Joined Server", value: member.joinedAt.toDateString(), inline: true },
        { name: "Account Created", value: member.user.createdAt.toDateString(), inline: true }
      )
      .setFooter({ text: `Information requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
}

//----------------------
//  exports
//----------------------
export default MemberInfo;
