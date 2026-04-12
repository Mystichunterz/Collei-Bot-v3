import Response from "../../classes/Response.js";

class loreSen extends Response {
  aliases = ["sen lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `The stars were always shining in the night sky and the creator wished for it to mark all of eternity, so he chose a lone star, a newly born cubic cluster, to keep history in its memory. The Novacube Cluster, it was called once, now reborn as the wandering archivist of starlight. With the form of its frame ever changing, their name remains ever the same as they record histories and stories in their ever growing archive. With a small smile on their face as they filled their archive, they introduced themself as "Sen".`
    );
  }
}

export default loreSen;
