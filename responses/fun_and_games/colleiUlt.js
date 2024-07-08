import Response from "../../classes/Response.js";

class CharacterUltLines extends Response {
  aliases = ["collei ult"];
  accessLevel = 10;

  // Store ult lines for each character and mix ally and enemy responses together
  ultLines = [
    "Don't get in my way!", // Viper (Ally)
    "Welcome to my world!", // Viper (Enemy)
    "Watch this!", // Jett (Ally)
    "Get out of my way!", // Jett (Enemy)
    "Let's go!", // Breach (Ally)
    "Off your feet!", // Breach (Enemy)
    "Here comes the party!", // Raze (Ally)
    "Fire in the hole!", // Raze (Enemy)
    "They will cower!", // Reyna (Ally)
    "The hunt begins!", // Reyna (Enemy)
    "Come on, let's go!", // Phoenix (Ally)
    "Jokes over, you're dead!", // Phoenix (Enemy)
    "Where is everyone hiding?", // Cypher (Ally)
    "I know EXACTLY where you are.", // Cypher (Enemy)
    "Watch them run!", // Omen (Ally)
    "Scatter!", // Omen (Enemy)
    "I am the hunter!", // Sova (Ally)
    "Nowhere to run!", // Sova (Enemy)
    "Open up the sky!", // Brimstone (Ally)
    "Prepare for hellfire!", // Brimstone (Enemy)
    "Your duty is not over!", // Sage (Ally)
    "You will not kill my allies!", // Sage (Enemy)
    "I am Prometheus! And you- are just a god.",
    "Welcome to my world!", // Viper (Enemy)
    "They will cower!", // Reyna (Ally)
    "The hunt begins!", // Reyna (Enemy)
    "You want to play? Let's play.", // Chamber (Enemy)
    "They are so dead.", // Chamber (Ally)
    "You should run.", // Killjoy (Enemy)
    "Hoy! I'm pissed!" // Neon (Ally)
  ];

  // Function to randomly select a voiceline
  async run(message) {
    const randomLine = this.ultLines[Math.floor(Math.random() * this.ultLines.length)];
    return message.reply(randomLine);
  }
}

export default CharacterUltLines;
