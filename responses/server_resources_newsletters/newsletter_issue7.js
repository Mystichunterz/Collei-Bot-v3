import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue7 extends Response {
  aliases = ["tamnot-dehna3-vatkew-hdohp7"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 7・✦ ━━ »»")
      .setDescription(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHello Scholars!\n\nI've heard you've been fighting along side some fungi? That sounds scary! Make sure you let me know you're doing alright!\n\nAnyways! Here is the seventh edition of our Pages of Purana for you! We work hard to make sure you all get access to some pretty interesting information, as well as some awesome activities!\n\nThis edition has some pretty interesting content, with a new theory article and a super hard and challenging guessing game!! I couldn't solve it, but maybe you can help me out.\nI won't spoil it too much though- I hope you enjoy the read!\n\nLooks like someone has wandered into a withering zone, I'll see you next time!\n\n- Collei\n"
      )
      .setColor("#00a368")
      .setImage(
        "https://cdn.discordapp.com/attachments/982439487047077969/1046849463198683257/Final_TGP_Edition_7_server.jpg"
      )
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Noodle, Renvi, Slug, and Valerian <3",
      });

    message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue7;
