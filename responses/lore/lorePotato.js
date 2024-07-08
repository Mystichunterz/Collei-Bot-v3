import Response from "../../classes/Response.js";

class lorePotato extends Response {
  aliases = ["potato lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `Once a potato grew. The potato smiled. It was a potato. Then it got turned to fries.`
    );
  }
}

export default lorePotato;
