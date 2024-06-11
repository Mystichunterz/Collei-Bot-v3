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
  accessLevel = 1;
  constructor(client) {
    super(client, 'permissiontest', 'Locked behind security clearance 1.', []);
  }

  async run(client, interaction) {
    await interaction.reply('User has been authorized. Welcome.');
  }
}

//----------------------
//  exports
//----------------------
export default Ping;
