import Response from "../../classes/Response.js";

class loreRenvi extends Response {
  aliases = ["renvi lore"];
  cooldown = 5 * 1000;
  async run(message) {
    message.reply(
      `A Renvi sits inside a Renvi. Is the Renvi made of Renvi? Or is Renvi made of Renvi? Renvi screams for Renvi does not know.`
    );
  }
}

export default loreRenvi;
