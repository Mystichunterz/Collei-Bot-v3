import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue19 extends Response {
  aliases = ["newsletter-issue-19"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 19・✦ ━━ »»")
      .setDescription("Hello scholars!\nThank you for waiting, the 18th edition of Pages of Purara is here!! I got lost on my way here, Master Tighnari will never let me hear the end of it..\n\nThe Media Team has another exciting issue for you, so be sure to check it out.We have short stories, character analysis, and even an inside look of one of our Media Team members, too!\n\nNext month's edition will release later than usual, so you will be able to catch our 19th edition with the same beautiful artwork and interesting articles, but at a slightly later date. \n\nI'm going on a super top secret mission with the General Mahamatra! Hopefully his jokes don't give me too bad of a headache....\n\n-Collei")
      .setDescription("Happy New Year Scholars!!\n\nHere is the 19th edition of the Pages of Purana!! I know you guys are used to seeing me here every month, unfortunately, I caught a cold while visiting Amber for the holidays and my journey here was delayed!!\n\nThe Media Team is always happy to present their latest edition, and this month you will be happy to see some unique server stats to encompass this wonderful year together!\n\nThank you all for the kindness and entertainment that was shown here in this community! I have seen so many new faces this year and made so many new friends, it makes me so excited to continue our journey together in this new year!\n\n-Your friend, Collei\n")
      .setColor("#00a368")
      .setImage("https://cdn.discordapp.com/attachments/982439487047077969/1191287111408693328/Pages_of_Purana_ED_19.jpg?ex=65a4e394&is=65926e94&hm=d75f4e814ecd67fce45632a6cbd9d241c3204151a24a05febfb282625372c1b2&")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Renvi, Noodle, Silver, Karezi, Gamebang, Marusi, and Slug <3",
      });

    message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue19;
