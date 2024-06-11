/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("classes > handlers > commands_handler.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//----------------------
//  main
//----------------------
class CommandsHandler {
    constructor(client) {
        this.client = client;
    }

    async loadCommands() {
        const commandsPath = path.join(__dirname, '../../commands');
        await this.loadDirectory(commandsPath);
    }

    async loadDirectory(directory) {
        const items = fs.readdirSync(directory, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(directory, item.name);
            if (item.isDirectory()) {
                await this.loadDirectory(fullPath); // Recursively load commands from subdirectories
            } else if (item.name.endsWith('.js')) {
                await this.loadCommandFile(fullPath, item.name);
            }
        }
    }

    async loadCommandFile(filePath, fileName) {
        const commandName = fileName.split('.js')[0];
        const { default: Command } = await import(pathToFileURL(filePath).toString());
        const command = new Command(this.client, commandName);
        this.client.commands.set(commandName, command);
        if (command.aliases) {
            command.aliases.forEach(alias => {
                this.client.aliases.set(alias, commandName);
            });
        }
    }    

    async reloadCommands() {
        this.client.commands.clear();
        this.client.aliases.clear();
        this.client.cooldowns.clear();
        await this.loadCommands();
    }
}

//----------------------
//  exports
//----------------------
export default CommandsHandler;
