/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("events > messageReactionAdd.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Event from "../classes/Event.js";
import { handleRoleAssignment } from "./reaction_roles/reaction_roles.js";

//----------------------
//  main
//----------------------
class MessageReactionAdd extends Event {
  async run(reaction, user) {
    if (user.bot || reaction.message.partial || !reaction.message.embeds.some(embed => embed.title && embed.title.toLowerCase().startsWith('roles'))) return;
    
    try {
      await reaction.fetch();
    } catch (error) {
      console.error('Something went wrong when fetching the message:', error);
      return;
    }
    
    handleRoleAssignment(reaction, user, 'add');
  }
}

export default MessageReactionAdd;
