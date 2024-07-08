/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("classes > SlashCommand.js");
console.log("----------------------");

//----------------------
//  main
//----------------------
class SlashCommand {
  constructor(client, name, description, category = 'General', options = []) {
    this.client = client;
    this.name = name;
    this.description = description;
    this.category = category;
    this.options = options;
  }

  get data() {
    return {
      name: this.name,
      description: this.description,
      options: this.options,
    };
  }
}

//----------------------
//  exports
//----------------------
export default SlashCommand;
