import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue5 extends Response {
  aliases = ["tamnot-dehna3-vatkew-hdohd8"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 5・✦ ━━ »»")
      .setDescription(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nTravellers!\n\nHow have your travels in Sumeru been? I hope you’ve been having fun! Maybe you’ve been enjoying the scenery, the cuisine, or even meeting new people! I’ll have to ask you more about it sometime, hehe.\n\nAhem! But yes, here’s a new edition of our Pages of Purana for you! It’s already our 5th edition- funny how time flies! We hope you’ve been enjoying them so far, and will continue to enjoy them in the months to come!\n\nThis edition has some pretty interesting content, such as our photo-taking contest, an interview with another of our admins, and an article on the Minor Gods of Teyvat! I won’t spoil it too much though- I hope you enjoy the read!\n\nOh- it must be time to head out on patrol again, Master Tighnari’s calling my name.\n\nUntil next month, travellers!\n\n- Collei"
      )
      .setColor("#00a368")
      .setImage(
        "https://cdn.discordapp.com/attachments/959712273373478962/1025287265133543454/IMG_4725.jpg"
      )
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Akagi, Noodle, Renvi, Silver, Slug, and Valerian <3",
      });

    // message.channel.send("<@&959723574669742131>")

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue5;
