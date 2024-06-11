//----------------------
//  imports
//----------------------
import { EmbedBuilder } from "discord.js";
import { botConfig } from "../../config/bot_config.js";

//----------------------
// config
//----------------------
const colourConfig = botConfig.primaryColor;

//----------------------
//  main
//----------------------
class new_welcome {
  static sendWelcome(member, channelId) {
    const userMention = `<@${member.id}>`;

    const newEmbed = new EmbedBuilder()
      .setColor("#d03840")
      .setAuthor({ name: 'Collei', iconURL: 'https://cdn.discordapp.com/attachments/1179307355331108874/1237403679959547924/xbal_heart.png?ex=663c2e3b&is=663adcbb&hm=a570e807b131503be838491df5c0712df71d52fdb3c2767fd0b4293977f21ded&' })
      .setDescription(
        "➵ \"We hope you enjoy your stay here!\"\n\n" +
        "・Please read the rules in <#1179256246440820736> and grab yourself some roles from <#1179675733103230978>! <:XbalHeart:1188735369865334836>\n\n" +
        "・If you have any questions feel free to make a ticket in <#1179257501879906334>!"
      )
      .setThumbnail(`https://cdn.discordapp.com/attachments/817660143868575765/1215788212677513317/Profile_Picture_Himeko_-_Welcome.webp`)
      .setImage(`https://cdn.discordapp.com/attachments/1179248941620019273/1198486060745883658/IMG_1093.png?ex=663b011f&is=6639af9f&hm=c80d637b5fc47a1e71ee75f2989481260fcef39ed3c32adf75b851f6893267e4&`)
      .setFooter({ text: `Check out our Twitter! @Colleidaily`, iconURL: 'https://cdn.discordapp.com/attachments/818031871215796245/1237307791086194738/twitter_3670151.png?ex=663b2c2d&is=6639daad&hm=e536954b68cd99626c651f469d62ca9fff52540d14e5458a671ff4fc34d547dd&' })
      .setTimestamp();

    member.guild.channels.cache.get(channelId).send({
      content: `Welcome to Collei Mains, ${userMention}!`,
      embeds: [newEmbed]
    });
  }
}

//----------------------
//  exports
//----------------------
export default new_welcome;
