/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("commands > test.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Command from "../classes/Command.js";

//----------------------
//  main
//----------------------
class Test extends Command {
  aliases = ["testtest", "hello"];
  cooldown = 5 * 1000;
  async run(message) {
    message.reply("Success.");
  }
}

//----------------------
//  exports
//----------------------
export default Test;
