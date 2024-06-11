/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("classes > handlers > slash_commands_handler.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

//----------------------
//  config
//----------------------
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//----------------------
//  main
//----------------------
class SlashCommandsHandler {
    constructor(client) {
        this.client = client;
        this.rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
    }

    async loadSlashCommands(guildId) {
        const commandsPath = path.join(__dirname, '../../slash_commands');
        await this.loadDirectory(commandsPath);
        await this.registerSlashCommands(guildId);
    }

    async loadDirectory(directory) {
        const items = fs.readdirSync(directory, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(directory, item.name);
            if (item.isDirectory()) {
                await this.loadDirectory(fullPath);
            } else if (item.name.endsWith('.js')) {
                await this.loadSlashCommandFile(fullPath, item.name);
            }
        }
    }

    async loadSlashCommandFile(filePath, fileName) {
        const commandName = fileName.split('.js')[0];
        const { default: SlashCommand } = await import(pathToFileURL(filePath).toString());
        const slashCommand = new SlashCommand(this.client, commandName);
        this.client.slash_commands.set(commandName, slashCommand);
    }

    async registerSlashCommands(guildId) {
        let guild = this.client.guilds.cache.get(guildId);

        // Check if the guild is actually undefined or a string "undefined"
        if (!guild || guild === "undefined") {
            try {
                guild = await this.client.guilds.fetch(guildId);
                console.log(`Fetched guild:`, guild);
            } catch (error) {
                console.error(`Failed to fetch guild with ID: ${guildId}`, error);
            }
        }

        // Check if the guild is available and log the relevant properties for debugging
        const guildName = guild && guild.available ? guild.name : "Unknown Guild";
        if (guild) {
            console.log(`Guild properties: id = ${guild.id}, name = ${guild.name}, available = ${guild.available}`);
        } else {
            console.log(`Guild is not found or is unavailable.`);
        }

        const commands = Array.from(this.client.slash_commands.values()).map(cmd => cmd.data);

        try {
            console.log(`Started refreshing application (/) commands for guild: ${guildName} (${guildId})`);
            await this.rest.put(
                Routes.applicationGuildCommands(this.client.user.id, guildId),
                { body: commands },
            );
            console.log(`Successfully reloaded application (/) commands for guild: ${guildName} (${guildId})`);
        } catch (error) {
            console.error(error);
        }
    }

    async clearGlobalCommands() {
        try {
            console.log('Started clearing global application (/) commands.');

            // This will clear all global commands for your application
            await this.rest.put(
                Routes.applicationCommands(this.client.user.id),
                { body: [] }
            );

            console.log('Successfully cleared global application (/) commands.');
        } catch (error) {
            console.error('Failed to clear global commands:', error);
        }
    }
}

//----------------------
//  exports
//----------------------
export default SlashCommandsHandler;
