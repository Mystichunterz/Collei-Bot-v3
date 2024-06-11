/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("buttons > karaokequeue > karaoke_toggle_queue.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import { karaokeEmbed, queueOpen } from "../../responses/server_utility/karaokequeue.js";
import { ActionRowBuilder, ButtonBuilder } from "discord.js";

//----------------------
//  main
//----------------------
class KaraokeToggleQueueButton {
  karaokeStaffOnly = true;

  updateEmbed() {
    // Retrieve the original embed data object
    const embedData = karaokeEmbed.embeds[0].data;

    // Update the description field
    embedData.description = `The queue is currently ${queueOpen.value ? "open <:1colleiheart_nanananans:980914654450700428>" : "closed <:1colleisip_slug:1003532244100595783>"}\n\nHere is the current queue of karaoke singers:`;

    // Create a new action row with updated buttons
    const updatedButtons = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("karaoke_join-")
        .setStyle("Primary")
        .setLabel("Join the Queue!")
        .setEmoji("<:7colleiTCG:1075294222955069550>"),
      new ButtonBuilder()
        .setCustomId("karaoke_leave-")
        .setStyle("Danger")
        .setLabel("Leave the Queue!")
        .setEmoji("<:5peepo_exit:970296615862698044>"),
      new ButtonBuilder()
        .setCustomId("karaoke_next_singer-")
        .setStyle("Success")
        .setLabel("Next Singer!")
        .setEmoji("<:1nahidajuice_Silverdawn:1074141180771713074>"),
      new ButtonBuilder()
        .setCustomId("karaoke_delete-")
        .setStyle("Secondary")
        .setLabel("Reset Queue")
        .setEmoji("<:7fischlsmug:969906791720845372>"),
      new ButtonBuilder()
        .setCustomId("karaoke_toggle_queue-")
        .setStyle(queueOpen.value ? "Danger" : "Success")
        .setLabel(queueOpen.value ? "Close Queue" : "Open Queue")
        .setEmoji(queueOpen.value ? "<:7childesurprise:960184563898941471>" : "<:1childecool_noodleume:980914776286830652>"),
    ]);

    // Edit the original message with the updated embed
    return karaokeEmbed.edit({
      embeds: [embedData],
      components: [updatedButtons],
    });
  }


  async run(client, interaction, parameters) {
    try {
      // Toggle the queue state
      queueOpen.value = !queueOpen.value;

      // Update the queue embed
      this.updateEmbed();

      await interaction.reply({
        content: `Queue is now ${queueOpen.value ? 'open' : 'closed'}!`,
        ephemeral: true,
      });
    } catch (error) {
      console.error(error);
      await interaction.editReply({
        content: `There was an error processing your request. Please contact Mystichunterz#1922 if this issue persists.\n\n${error}`,
        ephemeral: true,
      });
    }
  }
}

export default KaraokeToggleQueueButton;
