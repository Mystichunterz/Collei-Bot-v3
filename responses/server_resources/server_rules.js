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
class server_rules extends Response {
  aliases = ["summon-the-rules"];
  accessLevel = 3;
  async run(message) {
    const newEmbed = new EmbedBuilder()
      .setTitle("«« ━━ ✦・Sumeru Akademiya | Server Rules・✦ ━━ »»")
      .setDescription(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nThe purpose of these rules is to maintain the server as a safe and fun environment at all times. Please do not feel intimidated by these rules - it is rare for those with decent behaviour to violate any rules at all. \n\n1. **Discord TOS & Guidelines**\nPlease read through and abide by Discord’s TOS and Guidelines at all times.\n\n[Terms of Service](https://discordapp.com/terms)\n[Discord Guidelines](https://discordapp.com/guidelines)\n\n2. **Language & Behaviour**\n Members are expected to treat others with mutual kindness and respect at all times. Harrassment, personal attacks, and insults will not be tolerated. Personal responsibility is of valued importance.\n\nRacism, xenophobia, and disrespecting other cultures is never allowed, no matter the context. This includes “ironic” and “dark” jokes.\n\n3. **NSFW Policy**\nWhile we see no harm in light banter and casual NSFW snark, any heavily NSFW content such as obscene and pornographic material will be dealt with by moderators, with possible consequences for those involved. \n\nAlways keep in mind that not all users are comfortable with NSFW language and interactions. Always assume that the user you are interacting with is uncomfortable with such interactions.\n\n4. **Scams & Phishing Links**\nAny users caught sending fake Nitro/phishing/miscellaneous scam links will be banned immediately.\n\n5. **Moderator Policy**\nWhile our moderators will make their very best effort to exercise discipline and unbiased moderation, we request equal understanding and cooperation of all members in the server. Moderators reserve the discretion to make moderation decisions. We ask for all members to respect their decisions.\n\n6. **Strikes & Punishments**\nOur server operates on a 5 strike policy. We have 3 methods of dealing with situations - verbal warnings, warnings, and instant bans. \n\nThe following punishments will be meted out based on the current number of active strikes the member has.\n\n**1 Strike** - No mute\n**2 Strikes** - 1 hour mute\n**3 Strikes** -  24 hour mute\n**4 Strikes** - 48 hour mute\n**5 Strikes** - Ban\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n[♞ Comprehensive List of Rules](https://drive.google.com/file/d/1jZyqSx8rXpaIoIKXYRH7JdLkHjks6sal/view?usp=sharing)\n[♛ List of Banned Words](https://drive.google.com/file/d/1lGurZeqsRrM6fBT1hyx07kXmysVgxatq/view?usp=sharing)\n"
      )
      .setColor("#00a368")
      .setImage(`https://i.imgur.com/50reWHC.png`)
      .setTimestamp();

    message.channel.send({ embeds: [newEmbed] });
  }
}

export default server_rules;
