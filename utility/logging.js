/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("utility > logging.js");
console.log("----------------------");

//----------------------
// imports
//----------------------
import channelIds from "../config/channel_config.js";

//----------------------
//  config
//----------------------
const loggingChannelID = channelIds.channelIds.find(config => config.name === "Logs").channel_id;

//----------------------
//  main
//----------------------

// Success logging function
export function logSuccess(message) {
    console.log(`\x1b[32m%s\x1b[0m`, message);
}

// Error logging function
export async function logError(client, context, error) {
    console.error(`Failed to ${context}:`, error);

    const channel = await client.channels.fetch(loggingChannelID).catch(console.error);

    if (channel) {
        channel.send(`🚨 **Error encountered with ${context}** 🚨\n\`\`\`${error.toString()}\`\`\``)
            .catch(err => console.error('Failed to send message to Discord:', err));
    }
}