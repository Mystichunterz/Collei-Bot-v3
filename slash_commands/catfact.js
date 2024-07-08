/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > catfact.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';
import fetch from 'node-fetch';
import { EmbedBuilder } from "discord.js";
import { botConfig } from "../config/bot_config.js";

//----------------------
//  config
//----------------------
const primaryColour = botConfig.primaryColor;

//----------------------
//  main
//----------------------
class CatFact extends SlashCommand {
    accessLevel = 10;
    constructor(client) {
        super(client, 'catfact', 'Get a random cat fact.', 'General', []);
    }

    async run(client, interaction) {
        const catFactUrl = 'https://catfact.ninja/fact';

        try {
            const response = await fetch(catFactUrl);
            const data = await response.json();

            // Create an embed to display the cat fact nicely
            const embed = new EmbedBuilder()
                .setTitle('Random Cat Fact')
                .setColor(primaryColour)
                .setDescription(data.fact);

            // Reply with the embed containing the cat fact
            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching cat fact:', error);
            await interaction.reply({ content: 'Failed to retrieve cat fact. Please try again later.', ephemeral: true });
        }
    }
}

// Export the modified class
export default CatFact