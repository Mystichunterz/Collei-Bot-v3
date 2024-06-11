/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("classes > handlers > buttons_handler.js");
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
class ButtonsHandler {
    constructor(client) {
        this.client = client;
    }

    async loadButtons() {
        const buttonsPath = path.join(__dirname, '../../buttons');
        await this.loadDirectory(buttonsPath);
    }

    async loadDirectory(directory) {
        const items = fs.readdirSync(directory, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(directory, item.name);
            if (item.isDirectory()) {
                await this.loadDirectory(fullPath); // Recursively load buttons from subdirectories
            } else if (item.name.endsWith('.js')) {
                await this.loadButtonFile(fullPath, item.name);
            }
        }
    }

    async loadButtonFile(filePath, fileName) {
        const buttonName = fileName.split('.js')[0];
        const { default: Button } = await import(pathToFileURL(filePath).toString());
        const button = new Button(this.client, buttonName);
        this.client.buttons.set(buttonName, button);
    }

    async reloadButtons() {
        this.client.buttons.clear();
        await this.loadButtons();
    }    
}

//----------------------
//  exports
//----------------------
export default ButtonsHandler;
