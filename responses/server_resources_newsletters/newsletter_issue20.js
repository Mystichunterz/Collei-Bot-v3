import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue20 extends Response {
  aliases = ["newsletter-issue-20"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 20・✦ ━━ »»")
      .setDescription("Hello again scholars! A sand storm blew my pages off my desk and it took me FOREVER to find them! Thankfully they're here now!\n\nBe sure to check out our wonderful articles this month! Doesn't Ganyu look just beautiful?? \n\n-Your friend, Collei")
      .setColor("#00a368")
      .setImage("https://cdn.discordapp.com/attachments/982439487047077969/1228870830977585276/Pages_of_Purana_ED_21.jpg?ex=662d9e25&is=661b2925&hm=85068853b8a33f8f783474d1327bae6b2c47881b6910f4e5082cc1dc5ef7b031&")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Slug, Renvi, Noodle, Silver, Karezi, and Gamebang <3",
      });

    message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue20;
