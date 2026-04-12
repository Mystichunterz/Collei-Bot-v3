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
class Comfsetup extends SlashCommand {
    accessLevel = 1;
    constructor(client) {
        super(client, 'comfsetup', 'Setsup the comf role', 'General', []);
    }

    async run(client, interaction) {
        const roleIds = [
            '973204764278013973',
            '973204886491656193',
            '973204943777443911',
            '973204983203909672',
            '973205037037805610',
            '973205233729671188',
            '973205327745003540',
            '973205432401272862',
            '973319826082762802',
            '973320326568099890',
            '973320407002251295',
            '973320467005988874',
            '973320509578170428',
            '973320558370488351',
            '973320594626056252',
            '973320756022886400',
            '1249894484544589854',
            '1249894631127384105'
        ];
        const additionalRoleId = '1261233059316109312';

        // Send an immediate response
        await interaction.reply('Processing...');

        // Fetch all members in the guild to ensure cache is up-to-date
        await interaction.guild.members.fetch();

        // Collect all members with any of the specified roles
        const membersWithRoles = new Set();
        for (const roleId of roleIds) {
            const role = interaction.guild.roles.cache.get(roleId);
            if (role) {
                role.members.forEach(member => {
                    console.log(`Fetched member: ${member.user.tag} with role ${roleId}`);
                    membersWithRoles.add(member);
                });
            }
        }

        // Add the additional role to each member who doesn't already have it
        let updatedMembersCount = 0;
        for (const member of membersWithRoles) {
            if (!member.roles.cache.has(additionalRoleId)) {
                try {
                    await member.roles.add(additionalRoleId);
                    console.log(`Added role with ID ${additionalRoleId} to user ${member.user.tag}`);
                    updatedMembersCount++;
                } catch (error) {
                    console.error(`Failed to add role with ID ${additionalRoleId} to user ${member.user.tag}:`, error);
                }
            }
        }

        // Edit the original response with the final count
        await interaction.editReply(`Pong! Updated ${updatedMembersCount} members with the additional role.`);
    }
}

//----------------------
//  exports
//----------------------
export default Comfsetup;
