import Response from "../../classes/Response.js";

class loreKeq extends Response {
  aliases = ["keq lore"];
  cooldown = 5 * 1000;
  async run(message) {
    message.reply(
      `There was once a girl that lived in China 2000 years ago. She had a superb ability to do stuff that is against the law???????? and she coined the term "troublemaker". She also has entered prison about 17 times and she is known for her ability to seduce women ??????`
    );
  }
}

export default loreKeq;
