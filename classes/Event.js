/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("classes > Event.js");
console.log("----------------------");

//----------------------
//  main
//----------------------
class Event {
  constructor(client, name) {
    this.client = client;
    this.name = name;
    this._listener = this._run.bind(this);
  }

  async _run(...args) {
    try {
      await this.run(...args);
    } catch (error) {
      console.error(error);
    }
  }

  startListener() {
    this.client.on(this.name, this._listener);
  }

  stopListener() {
    this.client.off(this.name, this._listener);
  }
}

//----------------------
//  exports
//----------------------
export default Event;
