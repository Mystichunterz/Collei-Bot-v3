import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue15 extends Response {
  aliases = ["tamnot-dehya1-vatkew-hwobso"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 15・✦ ━━ »»")
      .setDescription("r/place has come and gone once more, and what an exciting event it was! I hope everyone thoroughly enjoyed participating. With its conclusion, we decided to commemorate it with a new rebranding and design of our newsletter! I was so inspired by the designs and art of r/place 2023, I wanted to do a little designing of my own. \n\nWe still have our popular lore articles this month about the upcoming nation of Fontaine, but we dedicated our entire second page to the art of r/place and the people like you who helped make it a success!\n\nThank you for the support and the Design Team and I hope you enjoy this issue of Pages of Purana.\n\nTune in next time for Issue 16!\n-Collei"
      )
      .setColor("#00a368")
      .setImage("https://cdn.discordapp.com/attachments/988636185868001381/1137161174656491520/newsletter15-final.png")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Noodle, Renvi, Silver, Val <3",
      });
    message.channel.send("<@&959723574669742131>");
    message.channel.send({ embeds: [newEmbed] });
    message.channel.send("https://cdn.discordapp.com/attachments/988636185868001381/1137161174656491520/newsletter15-final.png");
  }
}

export default newsletter_issue15;
