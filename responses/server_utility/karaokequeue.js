/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("responses > server_utility > karaokequeue.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";

//----------------------
//  config
//----------------------
export const priorityQueue = new Map();
export const requeueQueue = new Map();

export let queueOpen = { value: true };

//----------------------
//  main
//----------------------
let karaokeEmbed = null;

let priorityField = "";
let requeueField = "";

class karaoke_queue extends Response {
  aliases = ["kqueue", "summon-karaoke", "kq", "karaoke-queue"];
  accessLevel = 8;

  currentMessage = null;

  async updateEmbed(message) {
    //----------------------
    //  embed updating
    //----------------------
    priorityField = "";
    requeueField = "";

    //----------------------
    //  Priority Queue Update
    //----------------------
    for (const [key, value] of priorityQueue.entries()) {
      const userId = key.split("-")[1];
      const hasSung = value.hasSung;
      const isSinging = value.isSinging;
      const userLine = `${hasSung ? "~~" : ""}<@${userId}>${hasSung ? "~~" : ""
        }${isSinging ? " 🎤" : ""}`;
      priorityField += `\n${userLine}`;
    }

    //----------------------
    //  Requeue Queue Update
    //----------------------
    for (const [key, value] of requeueQueue.entries()) {
      const userId = key.split("-")[1];
      const hasSung = value.hasSung;
      const isSinging = value.isSinging;
      const userLine = `${hasSung ? "~~" : ""}<@${userId}>${hasSung ? "~~" : ""
        }${isSinging ? " 🎤" : ""}`;
      requeueField += `\n${userLine}`;
    }
  }

  async run(message) {
    this.currentMessage = message;
    this.updateEmbed(message);
    const embed = new EmbedBuilder()
      .setTitle("Karaoke Queue")
      .setDescription(`The queue is currently ${queueOpen.value ? "open <:1colleiheart_nanananans:980914654450700428>" : "closed <:1colleisip_slug:1003532244100595783>"}\n\nHere is the current queue of karaoke singers:`)
      .addFields(
        {
          name: "Priority Queue",
          value: priorityField || "No singers in queue!",
          inline: true,
        },
        {
          name: "Requeue",
          value: requeueField || "No singers in queue!",
          inline: true,
        }
      )
      .setColor("#00a368");

    const buttons = new ActionRowBuilder().addComponents([
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

    // Delete previous karaokeEmbed if it exists
    if (karaokeEmbed) {
      await karaokeEmbed.delete();
    }

    karaokeEmbed = await message.channel.send({
      embeds: [embed],
      components: [buttons],
    });

    return karaokeEmbed;
  }
}

//----------------------
//  exports
//----------------------
export { karaokeEmbed };
export default karaoke_queue;

