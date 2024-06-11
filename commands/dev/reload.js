//----------------------
//  imports
//----------------------
import Command from "../../classes/Command.js";

//----------------------
//  main
//----------------------
class Reload extends Command {
    accessLevel = 1;
    category = "Dev";
    description = "Reloads the bot.";
    async run(message) {
        try {
            // Access client via this.client provided by the Command class
            await this.client.commandsHandler.reloadCommands();
            await this.client.eventsHandler.reloadEvents();
            await this.client.responsesHandler.reloadResponses();
            await this.client.buttonsHandler.reloadButtons();
            
            message.channel.send("All components have been reloaded successfully!");
        } catch (error) {
            console.error("Failed to reload components:", error);
            message.channel.send("Error occurred while reloading components.");
        }
    }
}

//----------------------
//  exports
//----------------------
export default Reload;
