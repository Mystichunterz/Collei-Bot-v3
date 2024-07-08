/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > createNewsletter.js");
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
class CreateNewsletter extends SlashCommand {
    accessLevel = 6;
    constructor(client) {
        super(client, 'createnewsletter', 'Create and save a newsletter embed.', [
            {
                name: 'issue_number',
                type: 4,
                description: 'The issue number of the newsletter',
                required: true
            },
            {
                name: 'description',
                type: 3,
                description: 'The content of the newsletter',
                required: true
            },
            {
                name: 'image_url',
                type: 3,
                description: 'The URL of the newsletter image',
                required: true
            },
            {
                name: 'authors',
                type: 3,
                description: 'List of author names separated by commas or spaces',
                required: true
            }
        ]);
    }

    async run(client, interaction) {
        const issueNumber = interaction.options.getInteger('issue_number');
        const description = interaction.options.getString('description');
        const imageUrl = interaction.options.getString('image_url');
        const authorsRaw = interaction.options.getString('authors');

        // Process authors list
        const authors = authorsRaw.split(/[, ]+/).filter(Boolean);
        const lastAuthor = authors.pop();
        const authorsText = authors.length ? `${authors.join(', ')}, and ${lastAuthor}` : lastAuthor;

        const embed = new EmbedBuilder()
            .setTitle(`«« ━━ ✦・Pages of Purana | Issue ${issueNumber}・✦ ━━ »»`)
            .setDescription(description.replace(/\\n/g, '\n\n'))
            .setColor('#00a368')
            .setTimestamp()
            .setFooter({
                text: `Article Credits: ${authorsText} <3`,
            });

        if (imageUrl) embed.setImage(imageUrl);

        // Save the embed to a local file (simplified storage)
        fs.writeFileSync('../data/lastNewsletter.json', JSON.stringify(embed.toJSON()));

        await interaction.reply({ content: 'Here is a preview of your newsletter:', embeds: [embed], ephemeral: true });
        await interaction.followUp({ content: 'To send this newsletter, use the /sendnewsletter command.', ephemeral: true });
    }
}

//----------------------
//  exports
//----------------------
export default CreateNewsletter;
