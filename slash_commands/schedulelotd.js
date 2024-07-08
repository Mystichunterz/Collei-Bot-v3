/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > schedulelotd.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ApplicationCommandOptionType } from 'discord.js';

import TaskManager from '../managers/TaskManager.js';

import { logSuccess, logError } from '../utility/logging.js';

import channelIds from "../config/channel_config.js";
import { botConfig } from '../config/bot_config.js';

//----------------------
//  config
//----------------------
// const LOTDChannelId = channelIds.channelIds.find(config => config.name === "AkashaTerminal").channel_id;
const LOTDChannelId = channelIds.channelIds.find(config => config.name === "Testing").channel_id;
const ServerId = botConfig.primaryServerId;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//----------------------
//  main
//----------------------
class ScheduleLOTD extends SlashCommand {
    accessLevel = 6;
    constructor(client) {
        super(client, 'schedulelotd', 'Save a LOTD with a scheduled date and time.', 'Staff - Lore', [
            {
                name: 'date',
                type: ApplicationCommandOptionType.String,
                description: 'The date to schedule the LOTD (YYYY-MM-DD).',
                required: true
            },
            {
                name: 'time',
                type: ApplicationCommandOptionType.String,
                description: 'The time to schedule the LOTD (HH:MM). Default is 07:00.',
                required: false
            }
        ]);
        this.taskManager = new TaskManager(client);
    }

    async run(client, interaction) {
        try {
            const date = interaction.options.getString('date');
            const time = interaction.options.getString('time') || "07:00";
            const filePath = path.join(__dirname, '../data/lastLOTD.json');

            if (!fs.existsSync(filePath)) {
                await interaction.reply({ content: 'No LOTD found. Please create one first.', ephemeral: true });
                logError(client, 'schedule LOTD', 'No LOTD found to schedule.');
                return;
            }

            const embedData = fs.readFileSync(filePath, 'utf-8');
            const embedJson = JSON.parse(embedData);

            const entry = { date, time, embed: embedJson, channelId: LOTDChannelId, guildId: ServerId };
            this.taskManager.scheduleLOTD(entry);

            await interaction.reply({ content: `LOTD scheduled for ${date} at ${time} SGT.` });
            logSuccess(`LOTD scheduled for ${date} at ${time} SGT.`);
        } catch (error) {
            console.error(error);
            logError(client, 'schedule LOTD', error);
            await interaction.reply({ content: 'An error occurred while scheduling the LOTD. Please try again later.', ephemeral: true });
        }
    }
}

//----------------------
//  exports
//----------------------
export default ScheduleLOTD;

