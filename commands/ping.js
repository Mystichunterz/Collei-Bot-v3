/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("commands > ping.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Command from "../classes/Command.js";
import { EmbedBuilder } from "discord.js";
import { botConfig } from "../config/bot_config.js";

//----------------------
//  config
//----------------------
const primaryColour = botConfig.primaryColor;

//----------------------
//  main
//----------------------
class Ping extends Command {
  category = "General";
  description = "Check the bot's latency.";

  async run(message) {
    message.reply("Pong. Calculating ping...");

    const newEmbed = new EmbedBuilder()
      .setColor(primaryColour)
      .setTitle(`Vennessa Bot Ping Report`)
      .setDescription(
        `**Bot Latency:** ${Date.now() - message.createdTimestamp
        }ms. \n**API Latency:** ${this.client.ws.ping}ms.
        `
      )
      .setFooter({ text: "Pyro Archon Mains" })
      .setTimestamp();

    message.reply({
      embeds: [newEmbed],
    });
  }
}

//----------------------
//  exports
//----------------------
export default Ping;
