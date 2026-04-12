import Response from "../../classes/Response.js";

class loreNero extends Response {
  aliases = ["nero lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `When history witnesses a great change, Razgriz reveals itself... first, as a dark demon. As a demon, it uses its power to rain death upon the land, and then it dies. However, after a period of slumber, Razgriz returns, this time, as a great hero.`
    );
  }
}

export default loreNero;
