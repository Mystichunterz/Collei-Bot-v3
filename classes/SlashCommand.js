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
// ── Mention safety ──────────────────────────────────────────────────
// If a command echoes user input into a message's `content`, set
// `allowedMentions: { parse: [] }` on the reply/send. See ALLOWED_MENTIONS.md
// ────────────────────────────────────────────────────────────────────
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
