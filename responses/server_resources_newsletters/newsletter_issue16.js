import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue16 extends Response {
  aliases = ["tamnot-dehya1-wino2l"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 16・✦ ━━ »»")
      .setDescription("Come quick Scholars!\nThe 16th edition of the Pages of Purana is here!!\n\nLots of changes this month and possibly more to come!\nOur Media Team as always is happy to hear your support for our newsletter, if you would like to see certain articles, lore or otherwise, please leave them in the suggestions channel.\n\nThank you all and I can't wait to keep exploring Teyvat with you!\n\n-Collei")
      .setColor("#00a368")
      .setImage("https://cdn.discordapp.com/attachments/982439487047077969/1148797136683671673/Pages_of_Purana_ED_16.jpg")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Slug, Renvi, Mystic, Karezi, Silver, Noodle <3",
      });

    message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue16;
