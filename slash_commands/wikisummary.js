/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > wikisummary.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';
import fetch from 'node-fetch';

//----------------------
//  main
//----------------------
class WikiSummary extends SlashCommand {
    accessLevel = 10;
    constructor(client) {
        super(client, 'wikisummary', 'Get the first few lines of a Wikipedia page.', 'General', [
            {
                name: 'query',
                type: 3,
                description: 'The Wikipedia page to fetch',
                required: true
            }
        ]);
    }

    async run(client, interaction) {
        const query = interaction.options.getString('query');
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.type === 'https://mediawiki.org/wiki/HyperSwitch/errors/not_found') {
                await interaction.reply({ content: 'No Wikipedia page found for the given query.' });
                return;
            }

            // Send only the first few lines or the first paragraph from the summary
            const summary = data.extract.split('\n').slice(0, 2).join('\n');
            await interaction.reply({ content: `**${data.title}**\n${summary}` });
        } catch (error) {
            await interaction.reply({ content: 'Failed to fetch Wikipedia data.', ephemeral: true });
            console.error('Error fetching Wikipedia data:', error);
        }
    }
}

//----------------------
//  exports
//----------------------
export default WikiSummary;
