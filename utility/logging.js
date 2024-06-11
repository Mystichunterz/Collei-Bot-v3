/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("utility > logging.js");
console.log("----------------------");

//----------------------
//  main
//----------------------

// Success logging function
export function logSuccess(message) {
    console.log(`\x1b[32m%s\x1b[0m`, message);
}

// Error logging function
export function logError(context, error) {
    console.error(`Failed to ${context}:`, error);
}
