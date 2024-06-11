/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("buttons > karaokequeue > karaoke_leave.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import { priorityQueue } from "../../responses/server_utility/karaokequeue.js";
import { requeueQueue } from "../../responses/server_utility/karaokequeue.js";
import { karaokeEmbed } from "../../responses/server_utility/karaokequeue.js";

//----------------------
//  main
//----------------------
class KaraokeLeaveQueueButton {
  // returns the key of the latest entry with hasSung set to false, or null if there are no such entries
  getLatestUnsungEntry(queue, user) {
    let latestUnsungEntry = null;
    let latestUnsungTime = -Infinity;
    for (const [key, value] of queue.entries()) {
      const [timestamp, userId] = key.split("-");
      if (
        userId === user &&
        !value.hasSung &&
        Number(timestamp) > latestUnsungTime
      ) {
        latestUnsungEntry = key;
        latestUnsungTime = Number(timestamp);
      }
    }
    return latestUnsungEntry;
  }

  async run(client, interaction, parameters) {
    try {
      const memberId = interaction.member.id;

      let response = null;
      // check if the user is in the priority queue
      const priorityQueueKey = this.getLatestUnsungEntry(
        priorityQueue,
        memberId
      );
      if (priorityQueueKey !== null) {
        priorityQueue.delete(priorityQueueKey);
        response = `You have left the Priority queue!`;
      }

      // check if the user is in the requeue queue
      const requeueQueueKey = this.getLatestUnsungEntry(requeueQueue, memberId);
      if (requeueQueueKey !== null) {
        requeueQueue.delete(requeueQueueKey);
        response = `You have left the Requeue queue!`;
      }

      if (response) {
        await interaction.reply({
          content: response,
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: "You aren't in either of the queues!",
          ephemeral: true,
        });
      }

      //----------------------
      //  embed updating
      //----------------------
      let priorityField = "";
      let requeueField = "";

      //----------------------
      //  Priority Queue Update
      //----------------------
      for (const [key, value] of priorityQueue.entries()) {
        const userId = key.split("-")[1];
        const hasSung = value.hasSung;
        const isSinging = value.isSinging;
        const userLine = `${hasSung ? "~~" : ""}<@${userId}>${
          hasSung ? "~~" : ""
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
        const userLine = `${hasSung ? "~~" : ""}<@${userId}>${
          hasSung ? "~~" : ""
        }${isSinging ? " 🎤" : ""}`;
        requeueField += `\n${userLine}`;
      }

      //----------------------
      //  Push Queue Update
      //----------------------
      const embed = karaokeEmbed.embeds[0];
      embed.fields[0].value = priorityField || "No singers in queue!";
      embed.fields[1].value = requeueField || "No singers in queue!";

      return karaokeEmbed.edit({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      if (
        error.message.includes(
          "Cannot read properties of null (reading 'embeds')"
        )
      ) {
        await interaction.editReply({
          content:
            "Sorry, the queue you are interacting with is outdated. Please try again with an updated queue embed.",
          ephemeral: true,
        });
      } else {
        await interaction.editReply({
          content: `There was an error processing your request. Please contact Mystichunterz#1922 if this issue persists.\n\n${error}`,
          ephemeral: true,
        });
      }
    }
  }
}

export default KaraokeLeaveQueueButton;
