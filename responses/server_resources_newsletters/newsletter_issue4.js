import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue4 extends Response {
  aliases = ["tamnot-dehna3-vatkew-hdohd7"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 4・✦ ━━ »»")
      .setDescription(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHello Travellers!\n\nIt's been a while since we last spoke, hasn't it? Cyno and I hope you're having a wonderful time in Sumeru! \n\nTo celebrate your arrival to Sumeru, we've prepared a special edition of our Pages of Purana!\n\nIt showcases many of the events we enjoyed leading up to Sumeru's launch, as well as some ongoing events  and others that will be held within the coming days. Come take a peek!\n\nOne of them was an aggie. io board that we opened for you all. I loved all the beautiful messages and artwork! Don't worry if you can't see it well in the newsletter-- we'll be posting high quality images of each board after this. Perhaps I'll set it as my wallpaper? I have to show Cyno how cute you all drew him~ <:1colleiheart_nanananans:980914654450700428>\n\nAhem, anyway, thank you for another month of fun memories, games and events in the server! \n\nSee you again next month, travelers!\n\n- Collei"
      )
      .setColor("#00a368")
      .setImage(
        "https://cdn.discordapp.com/attachments/982439487047077969/1013678960753778728/SA_Newsletter_Final.jpg"
      )
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Akagi, Noodle, Renvi, Silver, Slug, Valerian, Venfei, and Zen <3",
      });

    // message.channel.send("<@&959723574669742131>")

    message.channel.send({ embeds: [newEmbed] });

    message.channel.send({
      files: [
        "https://aggie.io/api/share/3c9e5c63a8.png",
        "https://aggie.io/api/share/480e9b7e2c.png",
      ],
    });
  }
}

export default newsletter_issue4;
