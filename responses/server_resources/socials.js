/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
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
class socials extends Response {
  aliases = ["summon-socials"];
  accessLevel = 7;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ✦・Sumeru Akademiya | Socials・✦ »»")
      .setDescription(
        "[✦・Official Website](https://genshinplace.com/)\n\n[✦・Youtube Channel](https://www.youtube.com/channel/UC08Ib5yE4iD4Avr09NMJUHA)\n\n[✦・Tiktok](https://www.tiktok.com/@sumeruakademiya)\n\n[✦・Twitter](https://twitter.com/SumeruAkademiya)\n\n[✦・Instagram](https://www.instagram.com/thegenshinplace/)\n\n[✦・Kofi](https://ko-fi.com/genshinplace)\n\n<:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226>"
      )
      .setColor("#00a368");

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default socials;
