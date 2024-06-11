import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue13 extends Response {
  aliases = ["tamnot-dehya1-vatkew-hdnwosl"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 13・✦ ━━ »»")
      .setDescription("Hello again Scholars!/nExciting news! The 13th edition of Pages of Purana is here! It's hard to believe how much time has already passed!/nThank you for your continued support, our Design Team has poured their hearts into creating captivating articles on lore and showcasing talented individuals!/nEnjoy reading this latest edition and thank you for being a part of our journey!/n/nApologies for the later posting date, Master Tighnari sent me on a few extra errands and I got held up a few days!!/n/n- Collei"
      )
      .setColor("#00a368")
      .setImage("https://cdn.discordapp.com/attachments/988636185868001381/1137161174656491520/newsletter15-final.png")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Noodle, Renvi, Silver, Val <3",
      });

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue13;
