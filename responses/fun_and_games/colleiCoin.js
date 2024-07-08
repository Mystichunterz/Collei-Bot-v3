import Response from "../../classes/Response.js";

class colleiCoin extends Response {
  aliases = ["collei, flip a coin"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  
  async run(message) {
    let jokeNumber = Math.floor(Math.random() * 2) + 1;
    message.reply("The gods flip a coin and the world holds its breath.");
    let comedicTiming = async (ms) =>
      await new Promise((r) => setTimeout(r, ms));
    await comedicTiming(2000);
    message.reply("On one side greatness, the other madness.");
    await comedicTiming(2000);
    switch (jokeNumber) {
      case 1:
        message.reply("Heads.");
        break;
      case 2:
        message.reply("Tails.");
        break;
    }
  }
}

export default colleiCoin;
