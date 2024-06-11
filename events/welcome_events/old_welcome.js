//----------------------
//  imports
//----------------------
import Discord, { EmbedBuilder } from "discord.js";
import fs from "fs";
import path from "path";
import generateImage from "../util/generateImage.js";
import { botConfig } from "../../config/bot_config.js";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//----------------------
// config
//----------------------
const colourConfig = botConfig.primaryColor;

//----------------------
//  main
//----------------------
class old_welcome {
  static async sendWelcome(member, channelId) {
    const userMention = `<@${member.id}>`;
    
    const img = await generateImage(member);
    const imgPath = path.join(__dirname, '../../join.png');
    fs.writeFileSync(imgPath, img, (err) => {
      if (err) console.error(err);
    });
    const image = new Discord.AttachmentBuilder(imgPath, { name: 'join.png' });

    const welcomeEmbed = new EmbedBuilder()
      .setColor(colourConfig)
      .setAuthor({ name: 'Collei', iconURL: 'https://static.wikia.nocookie.net/gensin-impact/images/e/ef/Collei_TCG_Avatar_Icon.png/revision/latest?cb=20221209014948' })
      .setTitle(`Welcome to Sumeru Akademiya | TGP, ${member.user.username}#${member.user.discriminator}!`)
      .setDescription(
        "➾ We hope you enjoy your stay here!\n" +
        "・Check out our rules in <#975177936929951776> and grab yourself some roles from <#959708759784038400>! <:1colleiheart_nanananans:980914654450700428>\n" +
        "・Otherwise, feel free to contact us in <#997685316204888104> for any questions!"
      )
      .setImage('attachment://join.png')
      .setFooter({ text: "Sumeru Akademiya | TGP" })
      .setTimestamp();

    member.guild.channels.cache.get(channelId).send({
      content: `Welcome to Sumeru Akademiya | TGP, ${userMention}!`,
      embeds: [welcomeEmbed],
      files: [image]
    });
  }
}

//----------------------
//  exports
//----------------------
export default old_welcome;
