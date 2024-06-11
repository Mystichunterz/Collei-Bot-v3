import Response from "../../classes/Response.js";

class colleiProphecy extends Response {
  aliases = ["prophecy"];
  async run(message) {
    let comedicTiming = async (ms) =>
      await new Promise((r) => setTimeout(r, ms));
    message.reply(`The dream... was clearer than a memory.`);
    await comedicTiming(3000);
    message.reply(`I heard the sound of thundering hooves.`);
    await comedicTiming(2000);
    message.reply(`Ringing shields and splintering swords.`);
    await comedicTiming(2000);
    message.reply(`And I place my heir upon the Iron Throne.`);
    await comedicTiming(4000);
    message.reply(`And all the dragons roared as one.`);
  }
}

export default colleiProphecy;
