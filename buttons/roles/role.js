const boosterColourRoles = [
  "969890981182849105",
  "969891212653908008",
  "969891135881359380",
  "969891447463612460",
  "969891655006183484",
  "969891171281301524",
  "969891990651154483",
  "969892111807840286",
  "969892282792824865",
  "969892522581168149",
  "969892418914758716",
  "969896958028288061",
  "969897044791685160",
  "969897188937314334",
  "969897291605479454",
  "969897364548648960",
  "969891804512157696",
  "969891970568835082",
  "969892206297108520",
  "969892311620259851",
  "969892494366097428",
  "969892602528821269",
  "969892759387398184",
  "1065963926187163678",
  "969895710432583740",
  "969895283087536148",
  "969894816030806028",
  "969894388962586685",
  "969893671522684929",
  "969893509140201482",
  "969890878011342848",
];
const visionRoles = [
  "959708760144752680",
  "959708762128654446",
  "959708761000382474",
  "959701887144308758",
  "959708761784746044",
  "959708762564870154",
  "959708760610324510",
  "959708761403048006",
];

class RoleButton {
  async run(client, interaction, parameters) {
    try {
      const roleId = parameters[0];

      const role = await interaction.guild.roles.fetch(roleId);
      if (!role)
        return interaction.reply({
          content: "Role not found",
          ephemeral: true,
        });

      const member = await interaction.guild.members.fetch(
        interaction.member.id
      );

      if (member.roles.cache.has(role.id)) {
        await member.roles.remove(role.id);
        return interaction.reply({
          content: `Removed the role ${role.name} from you!`,
          ephemeral: true,
        });
      } else {
        //----------------------
        //  Check if the role is a boosterColourRole
        //----------------------
        if (boosterColourRoles.includes(role.id)) {
          // check if the member has any of the booster colour roles
          const currentColourRole = member.roles.cache.find((r) =>
            boosterColourRoles.includes(r.id)
          );
          if (currentColourRole) {
            // remove the current colour role
            await member.roles.remove(currentColourRole);
            await member.roles.add(role.id);
            return interaction.reply({
              content: `Replaced the role ${currentColourRole.name} with the role ${role.name}!`,
              ephemeral: true,
            });
          }
          await member.roles.add(role.id);
          return interaction.reply({
            content: `Added the role ${role.name} to you!`,
            ephemeral: true,
          });
        }

        //----------------------
        //  Check if the role is a visionRole
        //----------------------
        if (visionRoles.includes(role.id)) {
          // check if the member has any of the booster colour roles
          const currentVisionRole = member.roles.cache.find((r) =>
            visionRoles.includes(r.id)
          );
          if (currentVisionRole) {
            // remove the current colour role
            await member.roles.remove(currentVisionRole);
            await member.roles.add(role.id);
            return interaction.reply({
              content: `Replaced the role ${currentVisionRole.name} with the role ${role.name}!`,
              ephemeral: true,
            });
          }
          await member.roles.add(role.id);
          return interaction.reply({
            content: `Added the role ${role.name} to you!`,
            ephemeral: true,
          });
        }

        await member.roles.add(role.id);
        return interaction.reply({
          content: `Added the role ${role.name} to you!`,
          ephemeral: true,
        });
      }
    } catch (error) {
      console.error(error);
      await interaction.editReply({
        content: `There was an error processing your request. Please contact Mystichunterz#1922 if this issue persists.\n\n${error}`,
        ephemeral: true,
      });
    }
  }
}

export default RoleButton;
