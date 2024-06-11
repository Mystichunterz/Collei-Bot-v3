import Response from "../../classes/Response.js";

class hicollei extends Response {
  aliases = [
    "hi collei!",
    "hi collei",
    "hello collei!",
    "hello collei",
    "hello there, collei!",
    "hello there, collei",
  ];
  accessLevel = 7;
  
  cooldown = 5 * 1000;
  async run(message) {
    message.reply(`Hello ${message.author.username}!`);
  }
}

export default hicollei;
