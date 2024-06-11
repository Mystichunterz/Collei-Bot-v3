/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("responses > reaction_roles > reaction_roles.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

//----------------------
//  main
//----------------------
class reaction_roles extends Response {
  aliases = ["reaction-roles"];
  accessLevel = 3;
  async run(message) {
    // Pronoun Reactions
    const pronounEmbed = new EmbedBuilder()
      .setTitle("Roles | Pronouns")
      .setDescription(
        'Select your preferred pronouns by reacting!\n\n🩷 | She/Her\n💙 | He/Him\n💚 | They/Them\n🤎 | Ask For Pronouns\n'
      )
      .setColor("#bf2900");

    // Other Role Categories
    const announcementEmbed = new EmbedBuilder()
      .setTitle("Roles | Announcements and More")
      .setDescription(
        'Stay updated with the latest news by reacting!\n\n📣 | Announcements\n📢 | Events\n📨 | Partner News\n✨ | Primogems\n🔥 | Pyro Archon Updates\n'
      )
      .setColor("#bf2900");

    const coopEmbed = new EmbedBuilder()
      .setTitle("Roles | Co-Op Sessions")
      .setDescription(
        'Join Co-Op sessions by reacting with your region!\n\n🌏 | AS Co-Op\n🌍 | EU Co-Op\n🌎 | NA Co-Op\n🌐 | SAR Co-Op\n'
      )
      .setColor("#bf2900");

    const worldLevelEmbed = new EmbedBuilder()
      .setTitle("Roles | World Levels")
      .setDescription(
        'Share your World Level by reacting!\n\n8️⃣ | WL 8\n7️⃣ | WL 7\n6️⃣ | WL 6\n5️⃣ | WL 5\n4️⃣ | WL 4\n3️⃣ | WL 3\n2️⃣ | WL 2\n1️⃣ | WL 1\n'
      )
      .setColor("#bf2900");

    // Send each embed and react with the appropriate emojis
    const embeds = [pronounEmbed, announcementEmbed, coopEmbed, worldLevelEmbed];
    const emojis = [
      ['🩷', '💙', '💚', '🤎'], // Pronouns
      ['📣', '📢', '📨', '✨', '🔥'], // Announcements
      ['🌏', '🌍', '🌎', '🌐'], // Co-Op
      ['8️⃣', '7️⃣', '6️⃣', '5️⃣', '4️⃣', '3️⃣', '2️⃣', '1️⃣'] // World Levels
    ];

    for (let i = 0; i < embeds.length; i++) {
      const sentMessage = await message.channel.send({ embeds: [embeds[i]] });
      for (const emoji of emojis[i]) {
        await sentMessage.react(emoji);
      }
    }
  }
}

export default reaction_roles;


