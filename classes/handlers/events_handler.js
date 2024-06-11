/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("classes > handlers > events_handler.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//----------------------
//  main
//----------------------
class EventsHandler {
    constructor(client) {
        this.client = client;
    }

    async loadEvents() {
        const eventsPath = path.join(__dirname, '../../events');
        await this.loadDirectory(eventsPath);
    }

    async loadDirectory(directory) {
        const items = fs.readdirSync(directory, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(directory, item.name);
            if (item.isDirectory()) {
                await this.loadDirectory(fullPath); // Recursively load events from subdirectories
            } else if (item.name.endsWith('.js')) {
                await this.loadEventFile(fullPath, item.name);
            }
        }
    }

    async loadEventFile(filePath, fileName) {
        try {
            const module = await import(pathToFileURL(filePath).toString());
            const Event = module.default;
    
            if (typeof Event === 'function' && Event.prototype) {
                const event = new Event(this.client, fileName.split('.js')[0]);
                
                // Check if 'startListener' method exists before trying to call it
                if (typeof event.startListener === 'function') {
                    event.startListener();
                    this.client.events.set(fileName.split('.js')[0], event);
                } else {
                    console.log(`\x1b[33mNo startListener method found in ${fileName}. Assuming file is not an Event file.\x1b[0m`);
                }
            } else {
                console.log(`\x1b[33mLoaded module from ${fileName} is not a valid event handler. Assuming file is not an Event file.\x1b[0m`);
            }
        } catch (error) {
            console.error(`Error loading event ${fileName}:`, error);
        }
    }
    

    async reloadEvents() {
        this.client.events.forEach(event => {
            event.stopListener();
        });
        this.client.events.clear();
        await this.loadEvents();
    }
}

//----------------------
//  exports
//----------------------
export default EventsHandler;
