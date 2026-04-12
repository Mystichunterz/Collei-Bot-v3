/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > ping.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';

//----------------------
//  main
//----------------------
class Ping extends SlashCommand {
  accessLevel = 10;
  constructor(client) {
    super(client, 'ping', 'Responds with Pong!', 'General', []);
  }

  async run(client, interaction) {
    await interaction.reply('Pong!');
  }
}

//----------------------
//  exports
//----------------------
export default Ping;
