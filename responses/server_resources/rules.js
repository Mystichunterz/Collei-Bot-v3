/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("responses > server_resources > server_rules.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

//----------------------
//  main
//----------------------
class rules extends Response {
  aliases = ["summon-rules"];
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ✦・ Server Rules・✦ »»")
      .setDescription(
        "[♞ Comprehensive List of Rules](https://drive.google.com/file/d/1jZyqSx8rXpaIoIKXYRH7JdLkHjks6sal/view?usp=sharing)\n[♛ List of Banned Words](https://drive.google.com/file/d/1lGurZeqsRrM6fBT1hyx07kXmysVgxatq/view?usp=sharing)"
      )
      .setColor("#00a368");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default rules;
