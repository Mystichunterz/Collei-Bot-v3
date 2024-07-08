import Response from "../../classes/Response.js";

class loreSlug extends Response {
  aliases = ["slug lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `There was once a pale woman with pink hair, who was very lonely. All things must meet this woman, so they shunned her. She took an axe and split herself in two, right down the middle. So she would always have a friend.`
    );
  }
}

export default loreSlug;
