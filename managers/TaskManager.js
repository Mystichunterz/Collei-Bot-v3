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
import { EmbedBuilder, AttachmentBuilder } from 'discord.js';

import { logSuccess, logError } from '../utility/logging.js';

//----------------------
//  config
//----------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const taskFilePath = path.join(__dirname, '../data/tasks.json');
const lotdFilePath = path.join(__dirname, '../data/lotd_schedule.json');

//----------------------
//  main
//----------------------
class TaskManager {
    constructor(client) {
        this.client = client;
        this.tasks = [];
        this.lotdEntries = [];
        this.loadTasks();
        this.loadLOTDEntries();
        this.startScheduler();
    }

    async loadTasks() {
        try {
            if (fs.existsSync(taskFilePath)) {
                const fileContent = fs.readFileSync(taskFilePath);
                this.tasks = JSON.parse(fileContent);
            }
            // logSuccess('Tasks loaded successfully.');
        } catch (error) {
            logError(this.client, 'load tasks', error);
        }
    }

    async loadLOTDEntries() {
        try {
            if (fs.existsSync(lotdFilePath)) {
                const fileContent = fs.readFileSync(lotdFilePath);
                this.lotdEntries = JSON.parse(fileContent);
            }
            // logSuccess('LOTD entries loaded successfully.');
        } catch (error) {
            logError(this.client, 'load LOTD entries', error);
        }
    }

    saveTasks() {
        try {
            fs.writeFileSync(taskFilePath, JSON.stringify(this.tasks, null, 2));
            const currentTimeSGT = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit', hour12: false });
            // logSuccess(`Tasks saved successfully at ${currentTimeSGT} SGT.`);
        } catch (error) {
            logError(this.client, 'save tasks', error);
        }
    }

    saveLOTDEntries() {
        try {
            // logSuccess('Saving LOTD entries... !', this.lotdEntries);
            const lotdData = JSON.stringify(this.lotdEntries, null, 2);
            // logSuccess(`LOTD entries data: ${lotdData}`);
            fs.writeFileSync(lotdFilePath, lotdData);
            // logSuccess('LOTD entries saved successfully.');
        } catch (error) {
            logError(this.client, 'save LOTD entries', error);
        }
    }

    scheduleTask(task) {
        this.tasks.push(task);
        this.saveTasks();
    }

    scheduleLOTD(entry) {
        this.lotdEntries.push(entry);
        this.saveLOTDEntries();
    }

    async startScheduler() {
        while (true) {
            const now = new Date();
            const nowSGT = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Singapore" }));

            const remainingTasks = [];
            const remainingLOTDEntries = [];

            for (const task of this.tasks) {
                const executeTime = new Date(task.executeAt);
                const executeTimeSGT = new Date(executeTime.toLocaleString("en-US", { timeZone: "Asia/Singapore" }));
                if (nowSGT >= executeTimeSGT) {
                    await this.executeTask(task);
                } else {
                    remainingTasks.push(task);
                }
            }

            for (const entry of this.lotdEntries) {
                const executeDateTime = new Date(`${entry.date}T${entry.time}:00`);
                const executeDateTimeSGT = new Date(executeDateTime.toLocaleString("en-US", { timeZone: "Asia/Singapore" }));
                if (nowSGT >= executeDateTimeSGT) {
                    logSuccess(`Posting LOTD scheduled for ${entry.date} at ${entry.time} SGT.`);
                    const success = await this.postLOTD(entry);
                    if (!success) {
                        remainingLOTDEntries.push(entry);
                    }
                } else {
                    remainingLOTDEntries.push(entry);
                }
            }

            this.tasks = remainingTasks;
            this.lotdEntries = remainingLOTDEntries;

            this.saveTasks();
            this.saveLOTDEntries();
            await setTimeout(60000); // Check every 60 seconds
        }
    }

    async executeTask(task) {
        try {
            switch (task.type) {
                case 'birthday':
                    const guild = await this.client.guilds.fetch(task.guildId);
                    const member = await guild.members.fetch(task.userId);
                    const role = guild.roles.cache.get(task.roleId);
                    if (member && role) {
                        await member.roles.remove(role);
                        const channel = guild.channels.cache.get(task.channelId);
                        if (channel) {
                            channel.send(`Happy Birthday ${member.displayName}! Your birthday role has been removed.`);
                        }
                        logSuccess(`${member.displayName}'s birthday role has been removed.`);
                    }
                    break;
                // Add other task types here
            }
        } catch (error) {
            logError(this.client, 'execute task', error);
        }
    }

    async postLOTD(entry) {
        try {
            console.log("Entry", entry)
            const guild = await this.client.guilds.fetch(entry.guildId);
            const channel = guild.channels.cache.get(entry.channelId);
            if (channel) {
                const embed = EmbedBuilder.from(entry.embed);

                // Define the path to the local image
                const localImagePath = path.join(__dirname, '../assets/images/lore_of_the_day/LOTD.png');
                const imageAttachment = new AttachmentBuilder(localImagePath, { name: 'LOTD.png' });

                // Predefined embed with local image
                const loreEmbed = new EmbedBuilder()
                    .setColor('#00a368')
                    .setImage('attachment://LOTD.png')
                    .setTimestamp();

                // Send the embed to the channel
                await channel.send("<@&999532997323792405>");
                await channel.send({
                    embeds: [loreEmbed, embed],
                    files: [imageAttachment]
                });

                logSuccess(`Posted LOTD scheduled for ${entry.date} at ${entry.time} in channel ${channel.name}.`);
                return true;
            } else {
                logError(this.client, 'post LOTD', 'Channel not found.');
                return false;
            }
        } catch (error) {
            logError(this.client, 'post LOTD', error);
            return false;
        }
    }
}

export default TaskManager;
