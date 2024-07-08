/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("slash_commands > genshinprofile.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import SlashCommand from '../classes/SlashCommand.js';
import fetch from 'node-fetch';

//----------------------
//  main
//----------------------
class GenshinProfile extends SlashCommand {
    constructor(client) {
        super(client, 'genshinprofile', 'Get Genshin Impact player data.', 'General', [
            {
                name: 'uid',
                type: 3, // STRING type for the UID input
                description: 'The UID of the Genshin Impact player',
                required: true
            }
        ]);
    }

    async run(client, interaction) {
        await interaction.reply('Working on it...');
        const uid = interaction.options.getString('uid');
        const url = `https://enka.network/api/uid/${uid}/`;
        const headers = {
            'User-Agent': 'ColleiDiscordBot/1.0 (mystichunter1188@gmail.com)'
        };

        try {
            const response = await fetch(url, { headers });
            if (!response.ok) {
                console.error(`HTTP Error Response: Status ${response.status} ${response.statusText}`);
                await interaction.editReply({ content: `Failed to fetch data: HTTP status ${response.status}. Please contact mystichunterz for assistance.`, ephemeral: true });
                return;
            }

            const data = await response.json();

            if (!data.playerInfo) {
                await interaction.editReply({ content: 'No data found for the given UID. Please check the UID and try again.', ephemeral: true });
                return;
            }

            const playerInfo = data.playerInfo;
            const replyContent = `**Nickname:** ${playerInfo.nickname ?? 'Not provided'}\n` +
                `**Level:** ${playerInfo.level ?? 'Unknown'}\n` +
                `**World Level:** ${playerInfo.worldLevel ?? 'Unknown'}\n` +
                `**Signature:** ${playerInfo.signature ?? 'No signature provided'}\n` +
                `**Achievements:** ${playerInfo.finishAchievementNum ?? '0'}\n` +
                `**Spiral Abyss:** Floor ${playerInfo.towerFloorIndex ?? 'N/A'}, Level ${playerInfo.towerLevelIndex ?? 'N/A'}`;

            await interaction.editReply({ content: replyContent });
        } catch (error) {
            console.error('Error fetching data from Genshin Impact API:', error);
            await interaction.editReply({ content: 'Failed to fetch data from Genshin Impact API. Please contact mystichunterz for assistance.', ephemeral: true });
        }
    }
}

//----------------------
//  exports
//----------------------
export default GenshinProfile;
