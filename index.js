/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("index.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import { GatewayIntentBits, Partials } from "discord.js";
import "dotenv/config";

import Bot from "./classes/Bot.js";
import { botConfig } from "./config/bot_config.js";
import { logSuccess } from './utility/logging.js';

//----------------------
//  config
//----------------------
const prefixConfig = botConfig.prefix;

//----------------------
//  main
//----------------------
logSuccess("Bot is starting up!");

const client = new Bot({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
  prefix: prefixConfig,
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.start(process.env.TOKEN);
