/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("buttons > karaokequeue > karaoke_join.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import { priorityQueue, requeueQueue, karaokeEmbed, queueOpen } from "../../responses/server_utility/karaokequeue.js";

//----------------------
//  main
//----------------------
class KaraokeQueueButton {

  // returns the key of the latest entry, or null if there are no entries
  getQueueKeyByUser(user, queue) {
    let maxKey = null;
    let maxNumber = -Infinity;

    for (const key of queue.keys()) {
      const [timestamp, userId] = key.split("-");
      if (userId === user && Number(timestamp) > maxNumber) {
        maxKey = key;
        maxNumber = Number(timestamp);
      }
    }
    return maxKey;
  }

  async run(client, interaction, parameters) {
    try {
      if (!queueOpen.value) {
        return interaction.reply({
          content: `Sorry, the queue is currently closed.`,
          ephemeral: true,
        });
      }
      const memberid = interaction.member.id;

      // check if the user is in the priority queue
      if (this.getQueueKeyByUser(memberid, priorityQueue)) {
        // check if the user has already sung in the priority queue
        if (
          priorityQueue.get(this.getQueueKeyByUser(memberid, priorityQueue))
            .hasSung
        ) {
          // check if the user is in the requeue queue and has already sung
          if (
            !this.getQueueKeyByUser(memberid, requeueQueue) ||
            requeueQueue.get(this.getQueueKeyByUser(memberid, requeueQueue))
              .hasSung
          ) {
            // add the user to the requeue queue
            requeueQueue.set(Date.now() + "-" + memberid, {
              hasSung: false,
              isSinging: false,
            });

            await interaction.reply({
              content: "You have joined the Requeue queue!",
              ephemeral: true,
            });
          } else {
            // user is already in the requeue queue and has not yet sung
            await interaction.reply({
              content: "You are already in the Requeue queue!",
              ephemeral: true,
            });
          }
        } else {
          // user is already in the priority queue and has not yet sung
          await interaction.reply({
            content: "You are already in the Priority queue!",
            ephemeral: true,
          });
        }
      } else {
        // add the user to the priority queue
        priorityQueue.set(Date.now() + "-" + memberid, {
          hasSung: false,
          isSinging: false,
        });

        await interaction.reply({
          content: "You have joined the Priority queue!",
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

export default KaraokeQueueButton;
