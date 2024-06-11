/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > resources.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';
import { EmbedBuilder } from 'discord.js';
import { botConfig } from "../config/bot_config.js";

//----------------------
//  config
//----------------------
const colourConfig = botConfig.primaryColor;

//----------------------
//  main
//----------------------
class Resources extends SlashCommand {
  constructor(client) {
    super(client, 'resources', 'Retrieve resources for various aid efforts.', [
      {
        name: 'aid_type',
        type: 3,
        description: 'The type of aid resources to retrieve (ukraine, palestine, sudan, yemen, tigray, congo)',
        required: true
      }
    ]);
  }

  async run(client, interaction) {
    const aidType = interaction.options.getString('aid_type').toLowerCase();
    const embed = new EmbedBuilder().setColor(colourConfig).setTimestamp();

    switch (aidType) {
      case 'ukraine':
        embed.setTitle(`Resources for Ukrainian Aid`)
          .setDescription(`**INFORMATION SITES**\n◊ [Ukraine War Guide](https://ukrainewar.carrd.co/)\n◊ [War in Ukraine](https://war.ukraine.ua/)\n**ASSISTANCE**\n◊ [Support Ukraine & Ukrainians](https://ukrainianinstitute.org.uk/russias-war-against-ukraine-what-can-you-do-to-support-ukraine-ukrainians/)\n◊ [DEC Ukraine Appeal](https://www.dec.org.uk/appeal/ukraine-humanitarian-appeal)\n◊ [Tumblr Help Guide](https://www.tumblr.com/deanirae/677289722372096000)\n**SOCIAL MEDIA**\nTwitter: MelaniePodolyak, BackAndAlive, GeneralStuffUA`);
        break;
      case 'palestine':
        embed.setTitle(`Resources for Palestinian Aid`)
          .setDescription(`**INFORMATION SITES**\n◊ [Decolonize Palestine](https://decolonizepalestine.com/)\n◊ [Palestine Academy](https://www.thepalestineacademy.com/)\n**ASSISTANCE**\n◊ [Arab Click to Help](https://arab.org/click-to-help/palestine/)\n◊ [Pious Projects](https://piousprojects.org/discover?country=183)\n◊ [Gaza e-Sims](https://gazaesims.com/)\n◊ [X Thread](https://x.com/daikyto9/status/1757892496946766109?s=20)\n**SOCIAL MEDIA**\nTwitter: TimesOfGaza, BDSMovement, MuhammadSmiry\nInstagram: Eye.on.palestine, LetsTalkPalestine`);
        break;
      case 'sudan':
        embed.setTitle(`Resources for Sudanese Aid`)
          .setDescription(`**INFORMATION SITES**\n◊ [USHMM on Sudan](https://www.ushmm.org/genocide-prevention/countries/sudan)\n◊ [X Thread](https://x.com/learntoliberate/status/1757656734024212984?s=20)\n**ASSISTANCE**\n◊ [Médecins Sans Frontières Donate](https://www.msf.org/donate)\n◊ [Twitter Thread on Sudan](https://twitter.com/colllrose/status/1719744340354802161)\n◊ [Eyes on Sudan](https://eyesonsudan.net/)\n◊ [SAPA Emergency Relief](https://sapa-usa.org/sudan-war-crisis-emergency-relief/)\n**SOCIAL MEDIA**\nTwitter: SAPA_ORG, SudanWarUpdates, NasAlSudann\nInstagram: DarfurWomenAction, sudan.updates`);
        break;
      case 'yemen':
        embed.setTitle(`Resources for Yemeni Aid`)
          .setDescription(`**INFORMATION SITES**\n◊ [Timeline of Yemen Crisis](https://arabcenterdc.org/resource/a-timeline-of-the-yemen-crisis-from-the-1990s-to-the-present/)\n**ASSISTANCE**\n◊ [Pious Projects for Yemen](https://piousprojects.org/discover?country=245)\n◊ [Pure Hands](https://www.purehands.org/)\n**SOCIAL MEDIA**\nTwitter: UNICEF_Yemen, UNinYE`);
        break;
      case 'tigray':
        embed.setTitle(`Resources for Tigrayan Aid`)
          .setDescription(`**INFORMATION SITES**\n◊ [Environmental Progress in Tigray](https://theconversation.com/the-war-on-tigray-wiped-out-decades-of-environmental-progress-how-to-start-again-201062)\n◊ [What's Happening in Tigray](https://omnatigray.org/whats-happening-in-tigray/)\n**ASSISTANCE**\n◊ [Tigray Youth Network](https://tigrayyouthnetwork.org/)\n◊ [Omna Tigray Projects](https://omnatigray.org/projects/)\n◊ [Australia Tigray Alliance](https://www.australiatigrayalliance.org/)\n**SOCIAL MEDIA**\nTwitter: Yonigussie, tigray116`);
        break;
      case 'congo':
        embed.setTitle(`Resources for Congolese Aid`)
          .setDescription(`**INFORMATION THREADS**\n◊ [X Thread](https://x.com/silvergrassleaf/status/1758832748649685247?s=20)\n◊ [Twitter Thread by TheConsciousLee](https://twitter.com/TheConsciousLee/status/1717972439424991378)\n◊ [Twitter Thread by Haechaiii](https://twitter.com/haechaiii/status/1718798461124939848)\n**ASSISTANCE**\n◊ [Save the Children](https://www.savethechildren.org/us/where-we-work/democratic-republic-of-congo)\n◊ [UNHCR Canada](https://give.unhcr.ca/page/83316/donate/1?ea.tracking.id=SEM23_DRC&utm_source=google&utm_medium=cpc&utm_campaign=CA_PS_EN_DRC&gad=1)\n◊ [War Child UK](https://www.warchild.org.uk/donate-democratic-republic-congo)\n◊ [CAMM DR Congo](https://cammedrcongo.org/donate/)\n**SOCIAL MEDIA**\nTwitter: congofriends, CongoCrisis\nInstagram: panzifoundation, iheartafricadotorg`);
        break;
      default:
        await interaction.reply({ content: `No resources found for "${aidType}". Please check the aid type and try again.`, ephemeral: true });
        return;
    }

    await interaction.reply({ embeds: [embed] });
  }
}

//----------------------
//  exports
//----------------------
export default Resources;
