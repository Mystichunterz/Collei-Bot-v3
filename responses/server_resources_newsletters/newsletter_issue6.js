import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue6 extends Response {
  aliases = ["tamnot-dehna3-vatkew-hdohd2"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 6・✦ ━━ »»")
      .setDescription(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHello Travellers!\n\nI hope that all has been well with meeting the adorable Nahida! Things in Sumeru have been getting quite interesting huh? You'll have to tell me all about it sometime! \n\nAhem! But yes, here’s the sixth edition of our Pages of Purana for you! Our design team has worked hard for the past six months and I honestly couldn't be more proud! We hope you’ve been enjoying them so far, and will continue to enjoy them in the months to come!\n\nThis edition has some pretty interesting content, such as our Inktober results, an interview with another of our admins, and an article on the mysterious Alice! I won’t spoil it too much though- I hope you enjoy the read!\n\nOh- sounds like someone is in need of a travel guide, I'll be on my way then! \n\nUntil next month, travelers!\n\n- Collei\n"
      )
      .setColor("#00a368")
      .setImage(
        "https://cdn.discordapp.com/attachments/982439487047077969/1037859813058695269/Untitled_Artwork.jpg"
      )
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Noodle, Renvi, Slug, and Valerian <3",
      });

    message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue6;
