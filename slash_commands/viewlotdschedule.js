/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > viewlotdschedule.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

//----------------------
//  config
//----------------------
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helper function to load LOTD entries from JSON file
const loadLOTDEntries = () => {
    const filePath = path.join(__dirname, '../data/lotd_schedule.json');
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }
    return [];
};

//----------------------
//  main
//----------------------
class ViewLOTDSchedule extends SlashCommand {
    accessLevel = 6;
    constructor(client) {
        super(client, 'viewlotdschedule', 'View the scheduled LOTDs.', []);
    }

    async run(client, interaction) {
        const entries = loadLOTDEntries();
        if (entries.length === 0) {
            await interaction.reply({ content: 'No LOTDs scheduled.', ephemeral: true });
            return;
        }

        // Generate the list of scheduled LOTDs
        const scheduleList = entries.map((entry, index) => {
            const { date, embed } = entry;
            return `**${index + 1}. Date: ${date}**\n**Title:** ${embed.title}\n**Authors:** ${embed.footer.text}\n`;
        }).join('\n\n');

        await interaction.reply({ content: scheduleList });
    }
}

//----------------------
//  exports
//----------------------
export default ViewLOTDSchedule;
