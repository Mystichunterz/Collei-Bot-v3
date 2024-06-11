//----------------------
//  imports
//----------------------
import { Client, Collection } from 'discord.js';

import CommandsHandler from './handlers/commands_handler.js';
import EventsHandler from './handlers/events_handler.js';
import ResponsesHandler from './handlers/responses_handler.js';
import ButtonsHandler from './handlers/buttons_handler.js';
import SlashCommandsHandler from './handlers/slash_commands_handler.js';

import { botConfig } from "../config/bot_config.js";
import { logSuccess, logError } from '../utility/logging.js';

//----------------------
//  config
//----------------------
const serverId = botConfig.primaryServerId;

//----------------------
//  main
//----------------------
class Bot extends Client {
  constructor(args) {
    super(args);

    this.prefix = args.prefix;
    this.commands = new Collection();
    this.aliases = new Collection();
    this.cooldowns = new Collection();
    this.events = new Collection();
    this.responses = new Collection();
    this.buttons = new Collection();
    this.slash_commands = new Collection();

    this.commandsHandler = new CommandsHandler(this);
    this.eventsHandler = new EventsHandler(this);
    this.responsesHandler = new ResponsesHandler(this);
    this.buttonsHandler = new ButtonsHandler(this);
    this.slashCommandsHandler = new SlashCommandsHandler(this);
  }

  async start(token) {
    try {
      await Promise.all([
        this.commandsHandler.loadCommands(),
        this.eventsHandler.loadEvents(),
        this.responsesHandler.loadResponses(),
        this.buttonsHandler.loadButtons()
      ]);
      logSuccess('All components loaded!');

      logSuccess('Now logging in...');
      await super.login(token);
      logSuccess('Logged in! Now loading Slash Commands...');
      
      try {
        await this.slashCommandsHandler.loadSlashCommands(serverId);
        logSuccess('Slash Commands Loaded!');
      } catch (error) {
        logError('load Slash Commands', error);
      }

    } catch (error) {
      logError('load initial components', error);
    }
  }

  getCommand(commandName) {
    let command = this.commands.get(commandName);
    if (!command) command = this.commands.get(this.aliases.get(commandName));
    return command;
  }

  getSlashCommand(slashCommandName) {
    let slash_command = this.slash_commands.get(slashCommandName);
    if (!slash_command) slash_command = this.slash_commands.get(this.aliases.get(slashCommandName));
    return slash_command;
  }

  getResponse(responseName) {
    let response = this.responses.get(this.aliases.get(responseName));
    return response;
  }

  getButton(buttonName) {
    let button = this.buttons.get(buttonName);
    return button;
  }
}

//----------------------
//  export
//----------------------
export default Bot;
