/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > help.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';
import { EmbedBuilder, ApplicationCommandOptionType } from 'discord.js';

//----------------------
//  main
//----------------------
class Help extends SlashCommand {
    constructor(client) {
        super(client, 'help', 'Displays a list of all available slash commands or information about a specific slash command.', 'General', [
            {
                name: 'command',
                type: 3, // STRING type for the command input
                description: 'The name of the command to get help with',
                required: false,
            }
        ]);
    }

    async run(client, interaction) {
        const commandName = interaction.options.getString('command');

        if (commandName) {
            // User asked for help about a specific slash command
            this.getSpecificCommand(interaction, commandName);
        } else {
            // User asked for a general list of slash commands
            this.getAllCommands(interaction);
        }
    }

    getAllCommands(interaction) {
        const embed = new EmbedBuilder()
            .setTitle("Bot Slash Commands")
            .setColor("#00a368")
            .setDescription("Here is a list of all available slash commands:");

        const categories = {};

        // Group slash commands by category
        this.client.slash_commands.forEach(command => {
            const categoryName = command.category || 'General';
            if (!categories[categoryName]) {
                categories[categoryName] = [];
            }
            categories[categoryName].push(command.name);
        });

        // Add fields for each category
        const fields = Object.entries(categories).map(([category, commands]) => {
            return { name: category, value: commands.join(', '), inline: false };
        });

        embed.addFields(fields);
        interaction.reply({ embeds: [embed] });
    }

    getSpecificCommand(interaction, commandName) {
        const command = this.client.slash_commands.get(commandName.toLowerCase());
        if (!command) {
            return interaction.reply({ content: `No information found for slash command **${commandName}**`, ephemeral: true });
        }

        const embed = new EmbedBuilder()
            .setTitle(`Help: /${command.name}`)
            .setColor("#00a368")
            .addFields(
                { name: "Description", value: command.description || "No description available.", inline: false },
                { name: "Usage", value: `/${command.name} ${command.options.map(opt => opt.name).join(' ')}` || "No usage information available.", inline: false },
                { name: "Aliases", value: command.aliases ? command.aliases.join(', ') : "No aliases.", inline: false }
            );

        interaction.reply({ embeds: [embed] });
    }
}

//----------------------
//  exports
//----------------------
export default Help;
