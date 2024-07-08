import Response from "../../classes/Response.js";

class loreSlugxNoodle extends Response {
  aliases = ["slug x noodle lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `Of a crowd of workmen and drivers in a bar-room around the stove late of a winter night, a I unremark’d seated in a corner,\nOf a youth who loves me and whom I love, silently approaching and seating himself near, that he may hold me by the hand,\nA long while amid the noises of coming and going, of drinking and oath and smutty jest,\nThere we two, content, happy in being together, speaking little, perhaps not a word.`
    );
  }
}

export default loreSlugxNoodle;
