/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > createlotd.js");
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
class CreateLOTD extends SlashCommand {
    accessLevel = 6;
    constructor(client) {
        super(client, 'createlotd', 'Create and save a LOTD embed.', [
            {
                name: 'title',
                type: 3,
                description: 'The title of the LOTD',
                required: true
            },
            {
                name: 'description',
                type: 3,
                description: 'The content of the LOTD',
                required: true
            },
            {
                name: 'authors',
                type: 3,
                description: 'List of author name(s). Separate by commas or spaces for multiple authors.',
                required: true
            },
            {
                name: 'image_url',
                type: 3,
                description: 'The URL of the attached image. Post the image to discord, and use the url for the image. (Optional)',
                required: false
            }
        ]);
    }

    async run(client, interaction) {
        const title = interaction.options.getString('title');
        const description = interaction.options.getString('description');
        const imageUrl = interaction.options.getString('image_url') || 'https://cdn.discordapp.com/attachments/878788560231227462/984895829640884274/bkgjh.png?ex=668254f8&is=66810378&hm=f6c60b45bda1d7fb8c9c468f08760dd802647f17ecb259eb7f55391954d3afb1&';
        const authorsRaw = interaction.options.getString('authors');

        // Process authors list
        const authors = authorsRaw.split(/[, ]+/).filter(Boolean);
        const lastAuthor = authors.pop();
        const authorsText = authors.length ? `${authors.join(', ')}, and ${lastAuthor}` : lastAuthor;

        // Define the path to the local image
        const localImagePath = path.join(__dirname, '../assets/images/lore_of_the_day/LOTD.png');
        const imageAttachment = new AttachmentBuilder(localImagePath, { name: 'LOTD.png' });

        // Predefined embed with local image
        const loreEmbed = new EmbedBuilder()
            .setColor('#00a368')
            .setImage('attachment://LOTD.png')
            .setTimestamp();

        const embed = new EmbedBuilder()
            .setTitle(`${title}`)
            .setDescription(description.replace(/  /g, '\n\n'))
            .setColor('#00a368')
            .setTimestamp()
            .setFooter({
                text: `Article Credits: ${authorsText}`,
            });

        if (imageUrl) embed.setImage(imageUrl);

        // Save the embed to a local file (simplified storage)
        const filePath = path.join(__dirname, '../data/lastLOTD.json');
        fs.writeFileSync(filePath, JSON.stringify(embed.toJSON()));

        await interaction.reply({
            content: 'Here is a preview of your LOTD:',
            embeds: [loreEmbed, embed],
            files: [imageAttachment],
            ephemeral: true
        });
        await interaction.followUp({ content: 'To send this LOTD, use the /sendlotd command.', ephemeral: true });
    }
}

//----------------------
//  exports
//----------------------
export default CreateLOTD;
