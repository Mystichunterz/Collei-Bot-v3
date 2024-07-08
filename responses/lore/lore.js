import Response from "../../classes/Response.js";

class lore extends Response {
  aliases = ["lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `I ruled undisputed, Zykkard as my right hand, Mika as my left.  The problem with humanity was too much freedom and leisure time - I removed both. I dispensed great justice and retribution - in the name of peace. I created an eternal empire ruled with imperious malice, lest humanity reverted to its primal primitive habits. There was no love, except love for me. There was no art, no literature, no science. Total domination. Unlimited power. Unlimited cookies. Who could stand in my way, who would dare. As monarch of Teyvat. As Warden of history. As god emperor of time.`
    );
  }
}

export default lore;
