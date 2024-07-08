/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("managers > TaskManager.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { setTimeout } from 'timers/promises';

import { logSuccess, logError } from '../utility/logging.js';

//----------------------
//  config
//----------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const taskFilePath = path.join(__dirname, '../data/tasks.json');

//----------------------
//  main
//----------------------
class TaskManager {
    constructor(client) {
        this.client = client;
        this.tasks = [];
        this.loadTasks();
        this.startScheduler();
    }

    async loadTasks() {
        const fileContent = fs.readFileSync(taskFilePath);
        this.tasks = JSON.parse(fileContent);
    }

    saveTasks() {
        fs.writeFileSync(taskFilePath, JSON.stringify(this.tasks, null, 2));
    }

    scheduleTask(task) {
        this.tasks.push(task);
        this.saveTasks();
    }

    async startScheduler() {
        while (true) {
            const now = new Date();
            this.tasks = this.tasks.filter(task => {
                const executeTime = new Date(task.executeAt);
                if (now >= executeTime) {
                    this.executeTask(task);
                    return false; // Remove executed task
                }
                return true;
            });
            this.saveTasks();
            await setTimeout(60000); // Check every minute
        }
    }

    async executeTask(task) {
        switch (task.type) {
            case 'birthday':
                const guild = await this.client.guilds.fetch(task.guildId);
                const member = await guild.members.fetch(task.userId);
                const role = guild.roles.cache.get(task.roleId);
                if (member && role) {
                    await member.roles.remove(role);
                    const channel = guild.channels.cache.get(task.channelId);
                    if (channel) {
                        logSuccess(`${member.displayName}'s birthday role has been removed.`);
                    }
                }
                break;
        }
    }
}

//----------------------
//  exports
//----------------------
export default TaskManager;
