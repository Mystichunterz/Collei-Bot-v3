import Response from "../../classes/Response.js";

class loreAkagi extends Response {
  aliases = ["akagi lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `A single treaty turned her life around. Instead of ten guns, three flight decks were mounted on her long hull. She was no long a battlecruiser. She was a fleet carrier, the first of her nation. Her three decks lost effectiveness through the passage of time, and they were consolidated into one. It was in this form that she gained a reputation as her fleet\'s flagship, gaining infamy, raining down destruction and laying waste to her enemies. This, however, would all come to an end in a single decisive battle. With a pull of a trigger, her death sentence was signed.`
    );
  }
}

export default loreAkagi;
