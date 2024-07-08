import Response from "../../classes/Response.js";

class loreSilver extends Response {
  aliases = ["silver lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `The sussy Silverpog repeated it once more. “DIN DJARIN!” And all fell silent in the voice chat. She hadnt left it in over a day and the server was worried for her sanity. Oh well, better to just leave her alone.`
    );
  }
}

export default loreSilver;
