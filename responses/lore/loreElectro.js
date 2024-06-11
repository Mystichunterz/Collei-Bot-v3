import Response from "../../classes/Response.js";

class loreElectro extends Response {
  aliases = ["electro lore"];
  cooldown = 5 * 1000;
  async run(message) {
    message.reply(
      `But after all what is Furina? To the sick, she's the cure. To the poor, she's the sustanance. To the hungry, she is food. To the people, she is God. Furina is nothing and everything at the same time she is beyond our mortal comprehension, as she said in the Book of Fontaine "I am your LORD, the only LORD". Furina is beyond ourselves and the world. Furina is love, Furina is life\n\n Only those who did good in life are able to stay in her kingdom, where she is sat and by her side is her bestie Neuvillette. For her who lived for a long time, for her whose thighs emanate purity, for her and only her we pray today.`
    );
  }
}

export default loreElectro;
