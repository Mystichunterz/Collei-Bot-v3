/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > sendlotd.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';
import { EmbedBuilder, AttachmentBuilder } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//----------------------
//  main
//----------------------
class SendLOTD extends SlashCommand {
    accessLevel = 6;
    constructor(client) {
        super(client, 'sendlotd', 'Sends the last saved LOTD.', []);
    }

    async run(client, interaction) {
        // Define the path to the saved embed file
        const filePath = path.join(__dirname, '../data/lastLOTD.json');

        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            await interaction.reply({ content: 'No LOTD found. Please create one first.', ephemeral: true });
            return;
        }

        // Read the last saved embed from the file
        const embedData = fs.readFileSync(filePath, 'utf-8');
        const embedJson = JSON.parse(embedData);
        const embed = EmbedBuilder.from(embedJson);

        // Define the path to the local image
        const localImagePath = path.join(__dirname, '../assets/images/lore_of_the_day/LOTD.png');
        const imageAttachment = new AttachmentBuilder(localImagePath, { name: 'LOTD.png' });

        // Predefined embed with local image
        const loreEmbed = new EmbedBuilder()
            .setColor('#00a368')
            .setImage('attachment://LOTD.png')
            .setTimestamp();

        // Send the embed to the channel where the command was issued
        await interaction.channel.send("<@&999532997323792405>");
        await interaction.channel.send({
            embeds: [loreEmbed, embed],
            files: [imageAttachment]
        });

        // Confirm to the command user that the message was sent
        await interaction.reply({ content: 'LOTD sent successfully!', ephemeral: true });
    }
}

//----------------------
//  exports
//----------------------
export default SendLOTD;
