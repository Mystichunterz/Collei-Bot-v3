/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("responses > server_resources > kofi.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

//----------------------
//  main
//----------------------
class kofi extends Response {
  aliases = ["c.kofi"];
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ✦・Our Kofis・✦ »»")
      .setURL("https://ko-fi.com/genshinplace")
      .setColor("#00a368");

    console.log("Sending kofi")
    message.channel.send({ embeds: [newEmbed] });
  }
}

export default kofi;
