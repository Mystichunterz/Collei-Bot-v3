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

// Helper function to save LOTD entries to JSON file
const saveLOTDEntries = (entries) => {
    const filePath = path.join(__dirname, '../data/lotd_schedule.json');
    fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
};

//----------------------
//  main
//----------------------
class ScheduleLOTD extends SlashCommand {
    accessLevel = 6;
    constructor(client) {
        super(client, 'schedulelotd', 'Save a LOTD with a scheduled date.', [
            {
                name: 'date',
                type: 3,
                description: 'The date to schedule the LOTD (YYYY-MM-DD).',
                required: true
            }
        ]);
    }

    async run(client, interaction) {
        const date = interaction.options.getString('date');
        const filePath = path.join(__dirname, '../data/lastLOTD.json');

        if (!fs.existsSync(filePath)) {
            await interaction.reply({ content: 'No LOTD found. Please create one first.', ephemeral: true });
            return;
        }

        const embedData = fs.readFileSync(filePath, 'utf-8');
        const embedJson = JSON.parse(embedData);

        const entries = loadLOTDEntries();
        entries.push({ date, embed: embedJson });
        saveLOTDEntries(entries);

        await interaction.reply({ content: `LOTD scheduled for ${date}.` });
    }
}

//----------------------
//  exports
//----------------------
export default ScheduleLOTD;
