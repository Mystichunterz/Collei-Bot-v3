/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("responses > reaction_roles > master_roles.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";
import { botConfig } from "../../config/bot_config.js";

//----------------------
//  config
//----------------------
const colourConfig = botConfig.primaryColor;

//----------------------
//  main
//----------------------
class button_roles extends Response {
  aliases = ["summon-the-roles"];
  accessLevel = 3;
  async run(message) {
    //----------------------
    //  Pronoun Reactions
    //----------------------
    const pronounEmbed = new EmbedBuilder()
      .setTitle("Roles | Pronouns")
      .setDescription(
        'Select a preferred pronoun!\n\nFor pronouns not included in the list, please select "Ask Me!"\n\n♂️ | <@&963103820005646386>\n♀️ | <@&963103893766668339>\n🧸 | <@&963103928097079306>\n❔ | <@&973200552802545684>\n'
      )
      .setColor(colourConfig);

    const pronounButtons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-963103820005646386")
        .setStyle("Primary")
        .setLabel("He/Him")
        .setEmoji("♂️"),
      new ButtonBuilder()
        .setCustomId("role-963103893766668339")
        .setStyle("Primary")
        .setLabel("She/Her")
        .setEmoji("♀️"),
      new ButtonBuilder()
        .setCustomId("role-963103928097079306")
        .setStyle("Primary")
        .setLabel("They/Them")
        .setEmoji("🧸"),
      new ButtonBuilder()
        .setCustomId("role-973200552802545684")
        .setStyle("Primary")
        .setLabel("Ask Me!")
        .setEmoji("❔")
    );

    message.channel.send({
      embeds: [pronounEmbed],
      components: [pronounButtons],
    });

    //----------------------
    //  Region Reactions
    //----------------------
    const regionEmbed = new EmbedBuilder()
      .setTitle("Roles | Regions")
      .setDescription(
        "Select the Genshin server region(s) you play on!\n\nThis role grants you access to the respective region Co-Op channels, where you can play with others from the same region.\n\n🍔 | <@&976216788754923550>\n🍝 | <@&976216862671126540>\n🍜 | <@&976217499303542804>\n🧋 | <@&976217679675396106>\n🍵 | <@&976217797065596938>"
      )
      .setColor(colourConfig);

    const regionButtons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-976216788754923550")
        .setStyle("Primary")
        .setLabel("NA")
        .setEmoji("🍔"),
      new ButtonBuilder()
        .setCustomId("role-976216862671126540")
        .setStyle("Primary")
        .setLabel("EU")
        .setEmoji("🍝"),
      new ButtonBuilder()
        .setCustomId("role-976217499303542804")
        .setStyle("Primary")
        .setLabel("ASIA")
        .setEmoji("🍜"),
      new ButtonBuilder()
        .setCustomId("role-976217679675396106")
        .setStyle("Primary")
        .setLabel("TK-HK-MO")
        .setEmoji("🧋"),
      new ButtonBuilder()
        .setCustomId("role-976217797065596938")
        .setStyle("Primary")
        .setLabel("CN")
        .setEmoji("🍵")
    );
    message.channel.send({
      embeds: [regionEmbed],
      components: [regionButtons],
    });

    //----------------------
    //  Ping Reactions
    //----------------------
    const pingsEmbed = new EmbedBuilder()
      .setTitle("Roles | Pings & Access")
      .setDescription(
        "Select a role to be pinged for certain announcements and events!\n\n📢 | <@&959723574669742131>\n\n> Important updates concerning the server, such as major additions and new projects!\n\n📊 | <@&986045530360664064>\n\n> Polls for server decisions where community feedback is appreciated!\n\n<:2intertwined_fate:969907892595617913> | <@&986045367403561020>\n\n> Version announcements and other related pings for Genshin Impact!\n\n<:2primPRIMARYogem:986051235163545671> | <@&975003487815471124>\n\n> Pings for free primogems, from version livestreams and miscellaneous giveaways!\n\n🎉 | <@&975003820973236234>\n\n> Pings for server events and giveaways!\n\n🎲 | <@&963003075063324673>\n\n> Pings for game nights hosted in the server!\n\n🍿 | <@&986046143496617994>\n\n> Pings for watch parties hosted in the server! Movie details will also be released prior to the watch party via this ping.\n\n🎵 | <@&986046081907445760>\n\n> Pings for spontaneous listening parties hosted in the server! Come hang out and listen to some tunes. "
      )
      .setColor(colourConfig);

    const pingsButtons1 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-959723574669742131")
        .setStyle("Primary")
        .setEmoji("📢"),
      new ButtonBuilder()
        .setCustomId("role-986045530360664064")
        .setStyle("Primary")
        .setEmoji("📊"),
      new ButtonBuilder()
        .setCustomId("role-986045367403561020")
        .setStyle("Primary")
        .setEmoji("<:2intertwined_fate:969907892595617913>"),
      new ButtonBuilder()
        .setCustomId("role-975003487815471124")
        .setStyle("Primary")
        .setEmoji("<:2primogem:986051235163545671>")
    );

    const pingsButtons2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-975003820973236234")
        .setStyle("Primary")
        .setEmoji("🎉"),
      new ButtonBuilder()
        .setCustomId("role-963003075063324673")
        .setStyle("Primary")
        .setEmoji("🎲"),
      new ButtonBuilder()
        .setCustomId("role-986046143496617994")
        .setStyle("Primary")
        .setEmoji("🍿"),
      new ButtonBuilder()
        .setCustomId("role-986046081907445760")
        .setStyle("Primary")
        .setEmoji("🎵")
    );

    message.channel.send({
      embeds: [pingsEmbed],
      components: [pingsButtons1, pingsButtons2],
    });

    //----------------------
    //  Vision Reactions
    //----------------------
    const visionsEmbed = new EmbedBuilder()
      .setTitle("Roles | Vanity Colours: Visions")
      .setDescription(
        `"The gods goad us on with the promise of their seven treasures. Rewards for the worthy. The doorway to divinity."\n\n - Dainsleif, Teyvat Chapter Storyline Preview: Travail\n\n<:2element_pyro:984987720906592276> | <@&959708760144752680>\n\n<:2element_hydro:986055715951116340> | <@&959708761784746044>\n\n<:2element_anemo:986055777028562994> | <@&959701887144308758>\n\n<:2element_electro:986055789443686450> | <@&959708760610324510>\n\n<:2element_dendro:986055806967509084> | <@&959708761000382474>\n\n<:2element_cryo:986055828559773726> | <@&959708762564870154>\n\n<:2element_geo:986055859329171539> | <@&959708762128654446>\n\n<:2Element_Sakura:959711805079433266> | <@&959708761403048006>`
      )
      .setColor(colourConfig);

    const visionsButtons1 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-959708760144752680")
        .setStyle("Primary")
        .setEmoji("<:2element_pyro:984987720906592276>"),
      new ButtonBuilder()
        .setCustomId("role-959708761784746044")
        .setStyle("Primary")
        .setEmoji("<:2element_hydro:986055715951116340>"),
      new ButtonBuilder()
        .setCustomId("role-959701887144308758")
        .setStyle("Primary")
        .setEmoji("<:2element_anemo:986055777028562994>"),
      new ButtonBuilder()
        .setCustomId("role-959708760610324510")
        .setStyle("Primary")
        .setEmoji("<:2element_electro:986055789443686450>")
    );

    const visionsButtons2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-959708761000382474")
        .setStyle("Primary")
        .setEmoji("<:2element_dendro:986055806967509084>"),
      new ButtonBuilder()
        .setCustomId("role-959708762564870154")
        .setStyle("Primary")
        .setEmoji("<:2element_cryo:986055828559773726>"),
      new ButtonBuilder()
        .setCustomId("role-959708762128654446")
        .setStyle("Primary")
        .setEmoji("<:2element_geo:986055859329171539>"),
      new ButtonBuilder()
        .setCustomId("role-959708761403048006")
        .setStyle("Primary")
        .setEmoji("<:2Element_Sakura:959711805079433266>")
    );
    message.channel.send({
      embeds: [visionsEmbed],
      components: [visionsButtons1, visionsButtons2],
    });

    //----------------------
    //  LOTD Reaction
    //----------------------
    const loreEmbed = new EmbedBuilder()
      .setTitle("Roles | Lore of the Day")
      .setDescription(
        "Select this role to be pinged when daily lore-of-the-day posts are created! You can view previous lore-of-the-day posts in <#975196470150066227>.\n\n<:8Item_Heros_Wit:997706146989219931> | <@&999532997323792405>"
      )
      .setColor(colourConfig);

    const loreButtons = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-999532997323792405")
        .setStyle("Primary")
        .setLabel("LOTD")
        .setEmoji("<:8Item_Heros_Wit:997706146989219931>")
    );

    message.channel.send({ embeds: [loreEmbed], components: [loreButtons] });
  }
}

export default button_roles;
