import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

class newsletter_issue17 extends Response {
  aliases = ["tamnot-dehya1-wino28"];
  ownerOnly = true;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Pages of Purana | Issue 17・✦ ━━ »»")
      .setDescription("Hello again scholars!!\n\nThe 17th edition of Pages of Purana is finally here!!\n\nThe Media Team has worked very hard this month to get this newest edition out to you.\nBe sure to check out the article that you scholars helped to create! \n\nThank you all and I can't wait to continue our journey through Teyvat together! \n\n-Collei ")
      .setColor("#00a368")
      .setImage("https://cdn.discordapp.com/attachments/982439487047077969/1158951588849799188/Pages_of_Purana_ED_17.jpg?ex=651e1d47&is=651ccbc7&hm=ced947831d3557038977e9db56556248c9973bcfe3aa9e3cd1fba93cf2d9660f&")
      .setTimestamp()
      .setFooter({
        text: "Article Credits: Slug, Noodle, Renvi, Karezi, Silver, and Gamebang <3",
      });

    // message.channel.send("<@&959723574669742131>");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default newsletter_issue17;
