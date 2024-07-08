import Response from "../../classes/Response.js";

class loreKarezi extends Response {
  aliases = ["karezi lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `Collei forgot her meds\nSo Karezi stopped her\nA line about Childe\nAn ending line`
    );
  }
}

export default loreKarezi;
