import Response from "../../classes/Response.js";

class loreXei extends Response {
  aliases = ["xei lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `https://tenor.com/view/rickroll-roll-rick-never-gonna-give-you-up-never-gonna-gif-22954713`
    );
  }
}

export default loreXei;
