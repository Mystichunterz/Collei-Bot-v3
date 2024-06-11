/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("events > interactionCreate.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Event from "../classes/Event.js";
import { userHasPermission } from "./util/userHasPermission.js";
import { SecurityClearanceError } from '../utility/errors.js';

//----------------------
//  main
//----------------------
class InteractionCreate extends Event {
  async run(interaction) {
    if (interaction.isCommand()) {
      try {
        this.handleSlashCommand(interaction);
      } catch (error) {
        if (error instanceof SecurityClearanceError) {
          await interaction.reply({ content: error.message, ephemeral: true });
        } else {
          console.error(`Error handling slash command: ${error}`);
        }
      }
    } else if (interaction.isButton()) {
      try {
        this.handleButton(interaction);
      } catch (error) {
        console.error(`Error handling button interaction: ${error}`);
      }
    }
  }

  handleButton(interaction) {
    const [name, ...params] = interaction.customId.split("-");
    const button = this.client.getButton(name);

    if (!button) return;

    if (
      button.karaokeStaffOnly &&
      !interaction.member.roles.cache.has('961447200691466281')
    ) {
      return interaction.reply({
        content: `Woah! You aren't allowed to use that!`,
        ephemeral: true,
      });
    } else {
      button.run(this.client, interaction, params);
    }
  }

  handleSlashCommand(interaction) {
    const slashcmd = this.client.getSlashCommand(interaction.commandName);

    if (!slashcmd) return console.log("Command not found.");

    if (slashcmd.perms && !interaction.member.permissions.has(slashcmd.perms)) {
      return interaction.reply("You do not have permission to use this command.");
    }

    if (!userHasPermission(interaction.member, slashcmd)) {
      throw new SecurityClearanceError();
    }

    slashcmd.run(this.client, interaction);
  }
}

export default InteractionCreate;