/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("events > messageCreate.js");
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
class MessageCreate extends Event {
  async run(message) {
    if (message.content.startsWith(this.client.prefix) && !message.author.bot) {
      const args = message.content.slice(this.client.prefix.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();

      const command = this.client.getCommand(commandName);

      if (!command) return message.reply("Command does not exist.");

      try {
        if (!userHasPermission(message.member, command)) {
          throw new SecurityClearanceError();
        }

        if (command.cooldown) {
          const key = `${command.name}-${message.author.id}`;
          const cooldownUntil = this.client.cooldowns.get(key);

          if (cooldownUntil && cooldownUntil > Date.now()) {
            return message.reply(
              `Command is still on cooldown for ${Math.ceil((cooldownUntil - Date.now()) / 1000)} more seconds.`
            );
          }

          this.client.cooldowns.set(key, Date.now() + command.cooldown);
        }

        await command.run(message, args);
      } catch (error) {
        if (error instanceof SecurityClearanceError) {
          return message.reply("Insufficient security clearance. Access denied.");
        } else {
          console.error(`Error handling command: ${error}`);
        }
      }
    } else {
      let response = this.client.getResponse(message.content.toLowerCase());
      if (!response) return;

      try {
        if (!userHasPermission(message.member, response)) {
          throw new SecurityClearanceError();
        }

        // Check if message has a cooldown
        if (response.cooldown) {
          let cooldownUntil = this.client.cooldowns.get(
            `${response.name}-${message.author.id}`
          );
          if (cooldownUntil && cooldownUntil > Date.now())
            return message.reply(
              `Response is still on cooldown for ${Math.ceil(
                (cooldownUntil - Date.now()) / 1000
              )} more seconds`
            );

          // Sets the cooldown for the user by adding the current time plus the command's cooldown time to the cooldowns collection.
          this.client.cooldowns.set(
            `${response.name}-${message.author.id}`,
            new Date().valueOf() + response.cooldown
          );
        }

        await response.run(message);
      } catch (error) {
        if (error instanceof SecurityClearanceError) {
          return message.reply("Insufficient security clearance. Access denied.");
        } else {
          console.error(`Error handling response: ${error}`);
        }
      }
    }
  }
}

export default MessageCreate;
