/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("classes > Command.js");
console.log("----------------------");

//----------------------
//  main
//----------------------
// ── Mention safety ──────────────────────────────────────────────────
// If a command echoes user input into a message's `content`, set
// `allowedMentions: { parse: [] }` on the reply/send. See ALLOWED_MENTIONS.md
// ────────────────────────────────────────────────────────────────────
class Command {
  constructor(client, name) {
    this.client = client;
    this.name = name;
  }
}

//----------------------
//  exports
//----------------------
export default Command;
