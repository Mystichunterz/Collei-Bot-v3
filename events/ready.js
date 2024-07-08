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
import { ActivityType, PresenceUpdateStatus } from "discord.js";

import Event from "../classes/Event.js";
import { botConfig } from "../config/bot_config.js";
import PresenceManager from '../managers/PresenceManager.js';

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

    // Initialize and start presence manager
    const presenceManager = new PresenceManager(this.client);

    // Add different presences
    presenceManager.addPresence('Genshin Impact', ActivityType.Playing, PresenceUpdateStatus.Online);
    presenceManager.addPresence('Theorizing about Genshin Lore', ActivityType.Custom, PresenceUpdateStatus.Online);
    presenceManager.addPresence('Caprice of the Leaves', ActivityType.Listening, PresenceUpdateStatus.Idle);
    presenceManager.addPresence('Out on Patrol', ActivityType.Custom, PresenceUpdateStatus.DoNotDisturb);

    // Start rotation
    presenceManager.startRotation(300000);

    console.log('Presence rotation has started.');
  }
}

export default Ready;
