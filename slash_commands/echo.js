/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > echo.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';

//----------------------
//  main
//----------------------
class Echo extends SlashCommand {
    accessLevel = 1;
    constructor(client) {
        super(client, 'echo', 'Do the speak.', [
            {
                name: 'message',
                type: 3,
                description: 'speak',
                required: true
            }
        ]);
    }

    async run(client, interaction) {
        const messageToEcho = interaction.options.getString('message');
        await interaction.reply({ content: 'Echoing back: ' + messageToEcho, ephemeral: true });
        await interaction.channel.send(messageToEcho);
    }
}

//----------------------
//  exports
//----------------------
export default Echo;
