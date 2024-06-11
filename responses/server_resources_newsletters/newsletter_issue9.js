import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue8 extends Response {
  aliases = ["tamnot-dehya1-vatkew-jsdien"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 9・✦ ━━ »»")
      .setDescription("Hi there, Scholars!\n\nHappy New Year! I hope this year is even better than the last!\n\nIt's time for the 9th edition of Pages of Purana and the Design Team is thrilled to share it with you! The last 9 months have been amazing and we hope this newsletter continues to bring joy and excitement to your lives.\n\nIn this edition, you'll find four pictures of me hiding somewhere. Can you spot me? Also, don't forget to check out the booster ad and show love to all our amazing Ko-fi donors.\n\nLooking forward to seeing you all at the upcoming tournament!\n\n- Collei\n\n\n\n\n")
      .setColor("#00a368")
      .setImage("https://cdn.discordapp.com/attachments/982439487047077969/1070178407444402267/ITHINKIGOTITBITCHESSSS.jpg")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Slug, Noodle, Renvi, Valerian <3",
      });

    message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue8;
