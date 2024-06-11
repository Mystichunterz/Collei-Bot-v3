/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("events > ready.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Event from "../classes/Event.js";
import { botConfig } from "../config/bot_config.js";

//----------------------
//  config
//----------------------
const botName = botConfig.botName || "Nyx"; 

//----------------------
//  main
//----------------------
class Ready extends Event {
  async run() {
    console.log(` 
 _____       _ _      _  ______       _   
/  __ \\     | | |    (_) | ___ \\     | |  
| /  \\/ ___ | | | ___ _  | |_/ / ___ | |_ 
| |    / _ \\| | |/ _ \\ | | ___ \\/ _ \\| __|
| \\__/\\ (_) | | |  __/ | | |_/ / (_) | |_ 
 \\____/\\___/|_|_|\\___|_| \\____/ \\___/ \\__|
 `);
    console.log(
      `${botName} is online!\n\nLogged in as ${this.client.user.tag}!`
    );
    console.log(`Date: ${new Date().toLocaleString()} GMT+8`);
  }
}

export default Ready;
