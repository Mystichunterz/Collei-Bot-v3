import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue8 extends Response {
  aliases = ["tamnot-dehna3-vatkew-twdgot"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 8・✦ ━━ »»")
      .setDescription(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHello Scholars!\n\nHow's that new card game been? Master Tighnari has shown me a lot of new tricks! \n\nAnyways! Here is the eighth edition of our Pages of Purana for you! We work hard to make sure you all get access to some pretty interesting information, as well as see some beautiful art work! \n\nThis edition has some pretty interesting content, with a new theory article and a beautifully decorated Christmas Tree!! \nI won't spoil it too much though- I hope you enjoy the read!\n\nHappy Holidays Scholars! \n\n- Collei\n"
      )
      .setColor("#00a368")
      .setImage(
        "https://cdn.discordapp.com/attachments/1057854043042623568/1058366944249655326/IMG_6361.png"
      )
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Noodle, Renvi, Slug, SIlver, and Valerian <3",
      });

    message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue8;
