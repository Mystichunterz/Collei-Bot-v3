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
class Snipe extends SlashCommand {
  constructor(client) {
    super(client, 'snipe', 'Snipe someone', 'General', []);
  }

  async run(client, interaction) {
    await interaction.reply('https://tenor.com/view/sniper-aim-sword-art-online-anime-gif-9698384');
  }
}

//----------------------
//  exports
//----------------------
export default Snipe;
