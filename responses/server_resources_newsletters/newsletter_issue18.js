import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue18 extends Response {
  aliases = ["tamnot-dehya1-wino29"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 18・✦ ━━ »»")
      .setDescription("Hello scholars!\nThank you for waiting, the 18th edition of Pages of Purara is here!! I got lost on my way here, Master Tighnari will never let me hear the end of it..\n\nThe Media Team has another exciting issue for you, so be sure to check it out.We have short stories, character analysis, and even an inside look of one of our Media Team members, too!\n\nNext month's edition will release later than usual, so you will be able to catch our 19th edition with the same beautiful artwork and interesting articles, but at a slightly later date. \n\nI'm going on a super top secret mission with the General Mahamatra! Hopefully his jokes don't give me too bad of a headache....\n\n-Collei")
      .setColor("#00a368")
      .setImage("https://cdn.discordapp.com/attachments/982439487047077969/1171296753669124116/Pages_of_Purana_ED_18.jpg?ex=655c2a1b&is=6549b51b&hm=34e2ccb4bf1aafe517644a3ee144d2686d13d9eaee3129ddb18d02322f0a7cea&")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Slug, Noodle, Renvi, Karezi, and Gamebang <3",
      });

    message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue18;
