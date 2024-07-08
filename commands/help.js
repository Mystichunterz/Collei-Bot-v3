//----------------------
//  imports
//----------------------
import Command from "../classes/Command.js";
import { EmbedBuilder } from "discord.js";

//----------------------
//  main
//----------------------
class Help extends Command {
    accessLevel = 10;
    category = "General";
    description = "Displays a list of all available commands or information about a specific command.";

    async run(message, args) {
        if (args.length > 0) {
            // User asked for help about a specific command
            this.getSpecificCommand(message, args[0]);
        } else {
            // User asked for a general list of commands
            this.getAllCommands(message);
        }
    }

    getAllCommands(message) {
        const embed = new EmbedBuilder()
            .setTitle("Bot Commands")
            .setColor("#00a368")
            .setDescription("Here is a list of all available commands:");

        const categories = {};

        // Group commands by category
        this.client.commands.forEach(command => {
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
        message.channel.send({ embeds: [embed] });
    }

    getSpecificCommand(message, commandName) {
        const command = this.client.commands.get(commandName.toLowerCase());
        if (!command) {
            return message.channel.send({ content: "No information found for command **" + commandName + "**" });
        }

        const embed = new EmbedBuilder()
            .setTitle(`Help: ${command.name}`)
            .setColor("#00a368")
            .addFields(
                { name: "Description", value: command.description || "No description available.", inline: false },
                { name: "Usage", value: command.usage || "No usage information available.", inline: false },
                { name: "Aliases", value: command.aliases ? command.aliases.join(', ') : "No aliases.", inline: false }
            );

        message.channel.send({ embeds: [embed] });
    }
}

//----------------------
//  exports
//----------------------
export default Help;
