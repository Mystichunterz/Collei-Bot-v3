/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > begone.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';

//----------------------
//  main
//----------------------
class Begone extends SlashCommand {
  constructor(client) {
    super(client, 'begone', 'Send someone flying!', []);
  }

  async run(client, interaction) {
    await interaction.reply('https://tenor.com/view/skirk-genshin-impact-tartaglia-childe-out-gif-16838037374504354609');
  }
}

//----------------------
//  exports
//----------------------
export default Begone;
