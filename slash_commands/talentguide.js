/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > talentguide.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from "../classes/SlashCommand.js";
import { EmbedBuilder } from "discord.js";

//----------------------
//  main
//----------------------
class TalentGuide extends SlashCommand {
  constructor(client) {
    super(client, "talentguide", "Talent Guide for building Collei!", []);
  }

  async run(client, interaction) {
    const embed = new EmbedBuilder()
      .setColor("#FFD700")
      .setTitle(`Collei Talent Guide`)
      .setImage("https://cdn.discordapp.com/attachments/1179307394929545287/1204820796585812058/Untitled1920_20240208000718.png?ex=663ba34e&is=663a51ce&hm=384c4da074b87c8fd7db5bf6d7f5eb8ff5ace9068f948980606d7c63ab70be27&")
      .setFooter({ text: `Check out our Twitter! @Colleidaily` , iconURL: 'https://cdn.discordapp.com/attachments/818031871215796245/1237307791086194738/twitter_3670151.png?ex=663b2c2d&is=6639daad&hm=e536954b68cd99626c651f469d62ca9fff52540d14e5458a671ff4fc34d547dd&' })
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
}

//----------------------
//  exports
//----------------------
export default TalentGuide;
