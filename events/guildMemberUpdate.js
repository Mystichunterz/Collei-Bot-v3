/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("events > guildMemberUpdate.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Event from "../classes/Event.js";

//----------------------
//  main
//----------------------
class GuildMemberUpdate extends Event {
    constructor(client) {
        super(client, 'guildMemberUpdate');
    }

    async run(oldMember, newMember) {
        // Role IDs
        const targetRoleId = '973204764278013973'; // Role to check for
        const additionalRoleId = '1261233059316109312'; // Role to add

        // Check if the target role has been added
        const oldRoles = oldMember.roles.cache;
        const newRoles = newMember.roles.cache;

        const oldHasTargetRole = oldRoles.has(targetRoleId);
        const newHasTargetRole = newRoles.has(targetRoleId);

        // If the target role has been added, add the additional role
        if (!oldHasTargetRole && newHasTargetRole) {
            if (!newRoles.has(additionalRoleId)) {
                try {
                    await newMember.roles.add(additionalRoleId);
                    console.log(`Added role with ID ${additionalRoleId} to user ${newMember.user.tag}`);
                } catch (error) {
                    console.error(`Failed to add role with ID ${additionalRoleId} to user ${newMember.user.tag}:`, error);
                }
            }
        }
    }
}

export default GuildMemberUpdate;
