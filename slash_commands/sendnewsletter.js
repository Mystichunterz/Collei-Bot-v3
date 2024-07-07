/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > sendNewsletter.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';
import { EmbedBuilder } from 'discord.js';
import fs from 'fs';

//----------------------
//  main
//----------------------
class SendNewsletter extends SlashCommand {
    accessLevel = 6;
    constructor(client) {
        super(client, 'sendnewsletter', 'Sends the last saved newsletter.', []);
    }

    async run(client, interaction) {
        // Read the last saved embed from the file
        const embedData = fs.readFileSync('../lastNewsletter.json', 'utf-8');
        const embedJson = JSON.parse(embedData);
        const embed = EmbedBuilder.from(embedJson);

        // Send the embed to the channel where the command was issued
        await interaction.channel.send("<@&959723574669742131>");
        await interaction.channel.send({ embeds: [embed] });

        // Confirm to the command user that the message was sent
        await interaction.reply({ content: 'Newsletter sent successfully!', ephemeral: true });
    }
}

//----------------------
//  exports
//----------------------
export default SendNewsletter;
