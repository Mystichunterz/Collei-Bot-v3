//----------------------
//  imports
//----------------------
import Command from "../../classes/Command.js";
import { EmbedBuilder } from "discord.js";
import { inspect } from "util";
import fetch from 'node-fetch';

//----------------------
//  main
//----------------------
class EvalCommand extends Command {
    accessLevel = 1;
    aliases = ["evaluate", "ev"];
    category = "Dev";
    description = "Evaluates a given JavaScript code.";
    async run(message) {
        const args = message.content.split(" ").slice(1);
        const code = args.join(" ");
        try {
            let result = await eval(code);

            if (typeof result !== "string") {
                result = inspect(result, { depth: 1 });
            }

            if (result.includes(this.client.token)) {
                result = result.replace(this.client.token, "TOK3N");
            }

            const maxCharacters = 1900;
            if (result.length > maxCharacters) {
                let partIndex = 0;
                while (partIndex * maxCharacters < result.length) {
                    const embed = new EmbedBuilder()
                        .setColor("#FFD700")
                        .setTitle(`Eval Command Result (part ${partIndex + 1})`)
                        .setDescription(`\`\`\`js\n${result.slice(partIndex * maxCharacters, (partIndex + 1) * maxCharacters)}\n\`\`\``)
                        .setFooter({ text: `Eval Output Segment` });
                    message.channel.send({ embeds: [embed] });
                    partIndex++;
                }
            } else {
                const embed = new EmbedBuilder()
                    .setColor("#FFD700")
                    .setTitle("Eval Command Result")
                    .setDescription(`\`\`\`js\n${result}\n\`\`\``)
                    .setFooter({ text: "Eval Output" });
                message.channel.send({ embeds: [embed] });
            }
        } catch (error) {
            let errMessage = error.toString();
            if (errMessage.includes(this.client.token)) {
                errMessage = errMessage.replace(this.client.token, "T0K3N");
            }

            const embed = new EmbedBuilder()
                .setColor("#FF6347")
                .setTitle("Eval Command Error")
                .setDescription(`\`\`\`js\n${errMessage.slice(0, 1900)}\n\`\`\``)
                .setFooter({ text: "Eval Error" });
            message.channel.send({ embeds: [embed] });
        }
    }

}

//----------------------
//  exports
//----------------------
export default EvalCommand;
