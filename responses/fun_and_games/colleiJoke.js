import Response from "../../classes/Response.js";

class colleiJoke extends Response {
  aliases = [
    "collei, tell us a joke.",
    "collei, tell us a joke",
    "collei tell us a joke",
  ];
  accessLevel = 10;

  async run(message) {
    let jokeNumber = Math.floor(Math.random() * 7) + 1;
    let comedicTiming = async (ms) =>
      await new Promise((r) => setTimeout(r, ms));
    switch (jokeNumber) {
      case 1:
        message.reply(`Why is it unfortunate to drop your watch in a toilet?`);
        await comedicTiming(2000);
        return message.reply(
          `Cause it means you're bound to have a shitty time.`
        );
      case 2:
        message.reply(
          `Why should you not trust a man who makes a mistake in an elevator?`
        );
        await comedicTiming(2000);
        return message.reply(`Because he is wrong on many levels.`);
      case 3:
        return message.reply(
          `After the archon war, Celestia asked "Do you want this power that is Eru?" Rukkhadevata replied, "Yes, but I don't want just one. I want the Eru all the other Archons declined." Celestia agreed and gave her the crystals. So Greater Lord Rukkhadevata didn't just get one Eru. She got... Sum-eru...Get it? Some Eru? Sum...Sumeru??`
        );
      case 4:
        return message.reply(
          `Tighnari left Sumeru, and has joined a group of hippies who spend their days surfing off the shores of Liyue. He's pretty Tigh-gnarly at it!`
        );
      case 5:
        return message.reply(
          `Master Tighnari listens to everyone's problems. After all, he's all ears.`
        );
      case 6:
        return message.reply(
          `I wanted to say a joke about clocks, but i don't have the time.`
        );
      case 7:
        message.reply(
          `Sayu is always going fast. She doesn\'t even say goodbye. `
        );
        await comedicTiming(1000);
        return message.reply(`Not even a SAYU-NARA`);
    }
  }
}

export default colleiJoke;
