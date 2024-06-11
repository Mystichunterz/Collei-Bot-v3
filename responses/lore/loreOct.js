import Response from "../../classes/Response.js";

class loreSimpy extends Response {
  aliases = ["simpy lore"];
  cooldown = 5 * 1000;
  async run(message) {
    message.reply(
      `He prefers to have a worse crown than others, and I find that cool.`
    );
  }
}

export default loreSimpy;
