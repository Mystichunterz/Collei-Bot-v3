import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue14 extends Response {
  aliases = ["tamnot-dehya1-vatkew-skndwj"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 14・✦ ━━ »»")
      .setDescription("Hey there, Scholars!\n\nI've got some exciting news to share with you all! The 14th edition of Pages of Purana is finally here! Although I must admit, it's a tad bit shorter this time around. It seems I may have misplaced a page on my journey here, but I'm sure Master Tighnari will understand and forgive me...right?\n\nOur amazing Design Team has poured their hearts into creating captivating articles on game mechanics and shining a spotlight on some truly talented individuals within our community.\n\nOh, and one more thing- Happy Pride Month, Sumeru Akademiya!\n\n-Collei"
      )
      .setColor("#00a368")
      .setImage("https://cdn.discordapp.com/attachments/982439487047077969/1125070086332489850/Final_Edition_14.jpg")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Renvi, Slug, Silver, Noodle <3",
      });
    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue14;
