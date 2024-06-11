import Response from "../../classes/Response.js";

class bot_crash extends Response {
  aliases = ["n3oj2nj"];
  accessLevel = 3;
  async run(message) {
    message.reply(`Dying...`);
    throw new Error("Intentional error for testing purposes");
  }
}

export default bot_crash;
