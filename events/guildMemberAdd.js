/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("events > guildMemberAdd.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Event from "../classes/Event.js";

import OldWelcome from "./welcome_events/old_welcome.js";
import NewWelcome from "./welcome_events/new_welcome.js";
import RandomisedGreeting from "./welcome_events/randomised_greeting.js";

import channelIds from "../config/channel_config.js";

//----------------------
//  config
//----------------------
const welcomeChannelId = channelIds.channelIds.find(config => config.name === "Welcome").channel_id;

//----------------------
//  main
//----------------------
class GuildMemberAdd extends Event {
  async run(member) {
    const activeWelcomes = ["old"];

    for (let welcomeType of activeWelcomes) {
      switch (welcomeType) {
        case "old":
          await OldWelcome.sendWelcome(member, welcomeChannelId);
          break;
        case "new":
          NewWelcome.sendWelcome(member, welcomeChannelId);
          break;
        case "random":
          RandomisedGreeting.sendGreeting(member, welcomeChannelId);
          break;
        default:
          console.log(`No action defined for welcome type: ${welcomeType}`);
          break;
      }
    }
  }
}

export default GuildMemberAdd;
