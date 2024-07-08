import Response from "../../classes/Response.js";

class lore11th extends Response {
  aliases = ["11th lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `Blood. Blood dripped down the mighty 11th Fatui Harbinger, all those that had done her wrong were gone.\nFinally, she had slain her way up to Event head.\nHer efforts were greatly recognized; this was all the proof she needed to earn her spot.\nThat didn't mean she would stop there.\nThere were still so many. How could she rest until she destroyed them all.\nNo, she's still out there. And if you piss her off, she's coming for you.`
    );
  }
}

export default lore11th;
