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
class KaraokeDeleteButton {
  //----------------------
  //  configs
  //----------------------
  karaokeStaffOnly = true;

  updateEmbed() {
    //----------------------
    //  Priority Queue Update
    //----------------------
    let priorityField = ""; // define the variable as an empty string
    for (const [key, value] of priorityQueue.entries()) {
      const userId = key.split("-")[1];
      const hasSung = value.hasSung;
      const isSinging = value.isSinging;
      const userLine = `${hasSung ? "~~" : ""}<@${userId}>${hasSung ? "~~" : ""}${isSinging ? " 🎤" : ""}`;
      priorityField += `\n${userLine}`;
    }

    //----------------------
    //  Requeue Queue Update
    //----------------------
    let requeueField = ""; // define the variable as an empty string
    for (const [key, value] of requeueQueue.entries()) {
      const userId = key.split("-")[1];
      const hasSung = value.hasSung;
      const isSinging = value.isSinging;
      const userLine = `${hasSung ? "~~" : ""}<@${userId}>${hasSung ? "~~" : ""}${isSinging ? " 🎤" : ""}`;
      requeueField += `\n${userLine}`;
    }

    //----------------------
    //  Push Queue Update
    //----------------------
    const embed = karaokeEmbed.embeds[0];
    embed.fields[0].value = priorityField || "No singers in queue!";
    embed.fields[1].value = requeueField || "No singers in queue!";

    return karaokeEmbed.edit({ embeds: [embed] });
  }


  async run(client, interaction, parameters) {
    try {
      priorityQueue.clear();
      requeueQueue.clear();

      this.updateEmbed();

      await interaction.reply({
        content: `Queue cleared successfully!`,
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

export default KaraokeDeleteButton;
