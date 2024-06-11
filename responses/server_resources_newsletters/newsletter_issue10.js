import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue10 extends Response {
  aliases = ["tamnot-dehya1-vatkew-uelens"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 10・✦ ━━ »»")
      .setDescription("Greetings, fellow scholars!\n\nThe Pages of Purana edition 10 has finally arrived! Can you believe how fast this year is moving?\n\nInside this edition, you'll find some incredible articles about lore and theory crafting. Additionally, you will also have the pleasure of admiring some stunning artwork created by our very own members!\n\nIn case you missed it, there is an ongoing TCG tournament happening this week that promises to be an exciting event. I, for one, am eagerly awaiting the results and sitting at the edge of my seat in anticipation!\n\n- Collei\n\n\n")
      .setColor("#00a368")
      .setImage("https://cdn.discordapp.com/attachments/982439487047077969/1079928610787434546/FINALEd10.jpg")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Renvi, Slug, Valerian, Noodle <3",
      });

    message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue10;
