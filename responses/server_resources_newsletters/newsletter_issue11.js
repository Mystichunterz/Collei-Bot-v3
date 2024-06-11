import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue10 extends Response {
  aliases = ["tamnot-dehya1-vatkew-plcesa"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 11・✦ ━━ »»")
      .setDescription("Hello again Scholars!\n\nI am thrilled to announce the release of the Pages of Purana edition 11! It's hard to believe that almost a year has passed since the first edition, our Design Team has continued working hard to bring you an incredible collection of articles on lore and theory crafting, as well as showcases of some amazingly talented individuals and exciting servers!!\n\nI'm also excited to share that you guys have some fun events and celebrations headed your way in order to celebrate our one-year anniversary, so be sure to stay tuned for more information!! And speaking of anniversaries, I want to take a moment to wish you all a happy early anniversary!\n\nThank you for your continued support of the Pages of Purana, and I hope you enjoy this latest edition as much as the Design Team enjoyed putting it together!!\n\n-Collei"
      )
      .setColor("#00a368")
      .setImage("https://cdn.discordapp.com/attachments/982439487047077969/1091563419485884436/Final_Edition_11.jpg")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Renvi, Silver, Noodle, Slug, and Valerian <3",
      });

    message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue10;
