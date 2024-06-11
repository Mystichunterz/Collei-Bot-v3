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
import { priorityQueue } from "../../responses/server_utility/karaokequeue.js";
import { requeueQueue } from "../../responses/server_utility/karaokequeue.js";
import { karaokeEmbed } from "../../responses/server_utility/karaokequeue.js";

//----------------------
//  main
//----------------------
class KaraokeQueueButton {
  //----------------------
  //  configs
  //----------------------
  karaokeStaffOnly = true;
  async run(client, interaction, parameters) {
    try {
      let foundSinger = false;
      let response = "";

      if (priorityQueue.size === 0 && requeueQueue.size === 0) {
        await interaction.reply({
          content: `There isn't anyone in either queue!`,
          ephemeral: true,
        });
      } else {
        // Check if anyone is singing in the priority queue, and set them to no longer singing
        let foundPrioritySinger = false;
        for (const [key, value] of priorityQueue.entries()) {
          if (value.isSinging) {
            value.hasSung = true;
            value.isSinging = false;
            foundPrioritySinger = true;
            const userId = key.split("-")[1];
            response += `<@${userId}> has finished singing!\n`;
            break;
          }
        }

        // If there is no one singing in the priority queue, check if there is anyone singing in the requeue
        if (!foundPrioritySinger) {
          for (const [key, value] of requeueQueue.entries()) {
            if (value.isSinging) {
              value.hasSung = true;
              value.isSinging = false;
              const userId = key.split("-")[1];
              response += `<@${userId}> has finished singing!\n`;
              break;
            }
          }
        }

        // Check for someone in the priority queue who has not yet sang. If there is someone, set them to be singing
        let foundPriorityWaiter = false;
        for (const [key, value] of priorityQueue.entries()) {
          if (!value.hasSung && !value.isSinging) {
            value.isSinging = true;
            foundPriorityWaiter = true;
            foundSinger = true;
            const userId = key.split("-")[1];
            response += `The next singer is <@${userId}>!\n`;
            break;
          }
        }

        // If there is no one waiting in the priority queue, check the requeue who has not yet sang. If there is someone, set them to be singing, and end the function for now
        if (!foundPriorityWaiter) {
          for (const [key, value] of requeueQueue.entries()) {
            if (!value.hasSung && !value.isSinging) {
              value.isSinging = true;
              foundSinger = true;
              const userId = key.split("-")[1];
              response += `The next singer is <@${userId}>!\n`;
              break;
            }
          }
        }

        if (!foundSinger) {
          response += `\nThere is no one else waiting to sing!\n`;
        }

        await interaction.reply({
          content: response,
          ephemeral: true,
        });

        foundPrioritySinger = false;
        foundPriorityWaiter = false;
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

export default KaraokeQueueButton;
