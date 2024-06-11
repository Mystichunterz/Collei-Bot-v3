/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("classes > handlers > responses_handler.js");
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
class ResponsesHandler {
    constructor(client) {
        this.client = client;
    }

    async loadResponses() {
        const responsesPath = path.join(__dirname, '../../responses');
        await this.loadDirectory(responsesPath);
    }

    async loadDirectory(directory) {
        const items = fs.readdirSync(directory, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(directory, item.name);
            if (item.isDirectory()) {
                await this.loadDirectory(fullPath);
            } else if (item.name.endsWith('.js')) {
                await this.loadResponseFile(fullPath, item.name);
            }
        }
    }

    async loadResponseFile(filePath, fileName) {
        const responseName = fileName.split('.js')[0];
        const { default: Response } = await import(pathToFileURL(filePath).toString());
        const response = new Response(this.client, responseName);
        this.client.responses.set(responseName, response);
        if (response.aliases) {
            response.aliases.forEach(alias => {
                this.client.aliases.set(alias, responseName);
            });
        }
    }

    async reloadResponses() {
        this.client.responses.clear();
        await this.loadResponses();
    }    
}

//----------------------
//  exports
//----------------------
export default ResponsesHandler;
