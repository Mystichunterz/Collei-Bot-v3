//----------------------
//  config
//----------------------
const emojiToRoleMap = {
  '🩷': "1237223690907815967", // She/Her
  '💙': "1217353568940720159", // He/Him
  '💚': "1217353637236576327", // They/Them
  '🤎': "1217353751040622592", // Ask For Pronouns

  '📣': "1217353156426469396", // Announcements
  '📢': "1217353205638496327", // Events
  '📨': "1217353205638496327", // Partner News
  '✨': "1217353380968534106", // Primogems
  '🔥': "1217353439399641089", // Pyro Archon Updates

  '🌏': "1217353812633714698", // AS Co-Op
  '🌍': "1217353927616630845", // EU Co-Op
  '🌎': "1217354008415436890", // NA Co-Op
  '🌐': "1217354083501998162", // SAR Co-Op

  '8️⃣': "1217354174413541416", // WL 8
  '7️⃣': "1217354262162571334", // WL 7
  '6️⃣': "1217354315916906536", // WL 6
  '5️⃣': "1217354358925299803", // WL 5
  '4️⃣': "1217354402872954934", // WL 4
  '3️⃣': "1217354471441432657", // WL 3
  '2️⃣': "1217354527578259528", // WL 2
  '1️⃣': "1217354568640499802"  // WL 1
};

//----------------------
//  main
//----------------------
async function handleRoleAssignment(reaction, user, action) {
  const guild = reaction.message.guild;
  const member = await guild.members.fetch(user.id);
  const emojiIdentifier = reaction.emoji.id ? reaction.emoji.id : reaction.emoji.name;
  const roleId = emojiToRoleMap[emojiIdentifier];

  if (!roleId) return;

  const role = await guild.roles.fetch(roleId);
  if (!role) {
    console.error(`Role not found for ID: ${roleId}`);
    return;
  }

  if (action === 'add' && !member.roles.cache.has(role.id)) {
    await member.roles.add(role.id);
    console.log(`Added the role ${role.name} to ${user.tag}.`);
  } else if (action === 'remove' && member.roles.cache.has(role.id)) {
    await member.roles.remove(role.id);
    console.log(`Removed the role ${role.name} from ${user.tag}.`);
  }
}

//----------------------
//  exports
//----------------------
export { handleRoleAssignment };
