import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issueX extends Response {
  aliases = ["tamnot-dehya1-"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue X・✦ ━━ »»")
      .setDescription("")
      .setColor("#00a368")
      .setImage("")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Noodle, Renvi, Slug, Silver, and Valerian <3",
      });

    message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issueX;
