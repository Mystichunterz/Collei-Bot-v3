/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("managers > PresenceManager.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import { ActivityType, PresenceUpdateStatus } from "discord.js";

//----------------------
//  main
//----------------------
class PresenceManager {
  constructor(client) {
    this.client = client;
    this.presences = [];
    this.currentIndex = 0;
  }

  setActivity(name, type = ActivityType.Playing) {
    this.client.user.setActivity(name, { type });
  }

  setStatus(status = PresenceUpdateStatus.Online) {
    this.client.user.setStatus(status);
  }

  setPresence(activityName, activityType, status) {
    this.client.user.setPresence({ 
      activities: [{ name: activityName, type: activityType }], 
      status 
    });
  }

  addPresence(activityName, activityType, status) {
    this.presences.push({ activityName, activityType, status });
  }

  startRotation(interval = 300000) {
    if (this.presences.length === 0) return;
    this.setPresenceFromList();
    setInterval(() => {
      this.setPresenceFromList();
    }, interval);
  }

  setPresenceFromList() {
    const { activityName, activityType, status } = this.presences[this.currentIndex];
    this.setPresence(activityName, activityType, status);
    this.currentIndex = (this.currentIndex + 1) % this.presences.length;
  }
}

//----------------------
//  exports
//----------------------
export default PresenceManager;
