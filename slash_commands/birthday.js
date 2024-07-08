/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > birthday.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';
import { ApplicationCommandOptionType } from 'discord.js';
import TaskManager from '../managers/TaskManager.js';
import { logSuccess, logError } from '../utility/logging.js';

//----------------------
//  main
//----------------------
class Birthday extends SlashCommand {
    accessLevel = 9;
    constructor(client) {
        super(client, 'birthday', 'Give a user the birthday role for 24 hours.', [
            {
                name: 'user',
                type: ApplicationCommandOptionType.User,
                description: 'The user to give the birthday role to',
                required: true,
            }
        ], 'General');
    }

    async run(client, interaction) {
        try {
            const user = interaction.options.getUser('user');
            if (!user) {
                await interaction.reply('Invalid user ID. Please try again.');
                logError(client, 'fetch user', 'Invalid user ID provided.');
                return;
            }

            const member = await interaction.guild.members.fetch(user.id);
            const birthdayRoleId = '975193229047787650';
            const role = interaction.guild.roles.cache.get(birthdayRoleId);

            if (!role) {
                await interaction.reply('Birthday role not found. Please check the role ID.');
                logError(client, 'fetch role', 'Birthday role not found.');
                return;
            }

            await member.roles.add(role);
            await interaction.reply(`${user.username} has been given the birthday role!`);
            logSuccess(`Birthday role given to ${user.username}`);

            const taskManager = new TaskManager(client);
            const executeAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

            const task = {
                type: 'birthday',
                guildId: interaction.guild.id,
                userId: user.id,
                roleId: role.id,
                channelId: interaction.channel.id,
                executeAt: executeAt.toISOString(),
            };

            taskManager.scheduleTask(task);
            logSuccess(`Scheduled task to remove birthday role from ${user.username} in 24 hours.`);
        } catch (error) {
            console.error(error);
            logError(client, 'birthday command', error);
            await interaction.reply('An error occurred while executing the birthday command. Please try again later.');
        }
    }
}

//----------------------
//  exports
//----------------------
export default Birthday;
