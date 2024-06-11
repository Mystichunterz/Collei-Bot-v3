/* -------------------------
[File Information]
Author: mystichunterz, ChuGames
------------------------- */

console.log("----------------------");
console.log("utility > errors.js");
console.log("----------------------");

//----------------------
//  main
//----------------------
class SetupCheckFailure extends Error {
    constructor(message = "A check on this command has failed!\nIf you are a server manager, try configuring with </settings:1023762091603132501>.") {
        super(message);
        this.name = "SetupCheckFailure";
    }
}

class NotEnabledError extends Error {
    constructor(message = "This feature is not enabled!\nIf you are a server manager, try configuring with </settings:1023762091603132501>.") {
        super(message);
        this.name = "NotEnabledError";
    }
}

class NotSetupError extends Error {
    constructor(message = "A setting required for this command is not setup!\nIf you are a server manager, try configuring with </settings:1023762091603132501>.") {
        super(message);
        this.name = "NotSetupError";
    }
}

class NoDataError extends Error {
    constructor(message = "There is no data pertaining to what you are searching for!") {
        super(message);
        this.name = "NoDataError";
    }
}

class ParsingError extends Error {
    constructor(message = "I could not parse your input!") {
        super(message);
        this.name = "ParsingError";
    }
}

class BlacklistedError extends Error {
    constructor(until, reason) {
        super("You are currently blacklisted from the bot!");
        this.name = "BlacklistedError";
        this.until = until;
        this.reason = reason;
    }
}

class UnblacklistedMessage extends Error {
    constructor() {
        super("Your blacklist period is now up! You have been automatically unblacklisted, please be more mindful of bot rules in the future.");
        this.name = "UnblacklistedMessage";
    }
}

class PreRequisiteError extends Error {
    constructor(message = "A pre-requisite for this command is not met!") {
        super("**Pre-requisite not met**\n" + message);
        this.name = "PreRequisiteError";
    }
}

class AccessError extends Error {
    constructor(message = "You cannot access this data!") {
        super(message);
        this.name = "AccessError";
    }
}

class SecurityClearanceError extends Error {
    constructor(message = "Insufficient security clearance. Access denied.") {
        super(message);
        this.name = "SecurityClearanceError";
    }
}

//----------------------
//  exports
//----------------------

export {
    SetupCheckFailure,
    NotEnabledError,
    NotSetupError,
    NoDataError,
    ParsingError,
    BlacklistedError,
    UnblacklistedMessage,
    PreRequisiteError,
    AccessError,
    SecurityClearanceError
};
