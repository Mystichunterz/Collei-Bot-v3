import Response from "../../classes/Response.js";

class colleiBye extends Response {
  aliases = ["bye collei"];
  cooldown = 5 * 1000;
  async run(message) {
    message.reply(`Bye ${message.author.username}!`);
  }
}

export default colleiBye;
