/* -------------------------
[File Information]
Author: Mystichunterz#1922
Built for: Sumeru Akademiya | TGP
------------------------- */

console.log("----------------------");
console.log("responses > server_resources > serverDirectory.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Response from "../../classes/Response.js";
import { EmbedBuilder, AttachmentBuilder } from "discord.js";
import path from "path";
import { fileURLToPath } from 'url';
import dedent from "dedent";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { botConfig } from "../../config/bot_config.js";

//----------------------
//  asset imports
//----------------------
const headerCommunityPath = path.join(__dirname, '../../assets/images/server_directory/Our_Community.png');
const serverFocusPath = path.join(__dirname, '../../assets/images/server_directory/Server_Focus.png');
const channelsPath = path.join(__dirname, '../../assets/images/server_directory/Channels.png');
const rolesAndRewardsPath = path.join(__dirname, '../../assets/images/server_directory/Roles_and_Rewards.png');
const staffTeamPath = path.join(__dirname, '../../assets/images/server_directory/Staff_Team.png');
const contactTheMods = path.join(__dirname, '../../assets/images/server_directory/Contact_The_Mods.png');
const FAQPath = path.join(__dirname, '../../assets/images/server_directory/FAQs.png');

const colleiKnifePath = path.join(__dirname, '../../assets/images/emojis/collei-knife.png');
const cynoPeekPath = path.join(__dirname, '../../assets/images/emojis/cyno-peek.png');
const doriPopcornPath = path.join(__dirname, '../../assets/images/emojis/dori-popcorn.png');
const nahidaHopefulPath = path.join(__dirname, '../../assets/images/emojis/nahida-hopeful.png');
const nilouWavePath = path.join(__dirname, '../../assets/images/emojis/nilou-wave.png');
const tighnariThonkPath = path.join(__dirname, '../../assets/images/emojis/tighnari-thonk.png');

//----------------------
//  config
//----------------------
const primaryColour = botConfig.primaryColor;

const emptyImage = "https://cdn.discordapp.com/attachments/878788560231227462/984895829640884274/bkgjh.png?ex=668254f8&is=66810378&hm=f6c60b45bda1d7fb8c9c468f08760dd802647f17ecb259eb7f55391954d3afb1&"

const section = "<:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363>";
const dividerSection = section.repeat(4) + "<:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154>";

//----------------------
//  main
//----------------------
class serverDirectoryNew extends Response {
  aliases = ["summon-server-directory"];
  cooldown = 5 * 1000;
  accessLevel = 3;
  async run(message) {
    const headerImage = new AttachmentBuilder(headerCommunityPath, { name: 'OUR_COMMUNITY.png' });
    const serverFocusImage = new AttachmentBuilder(serverFocusPath, { name: 'SERVER_FOCUS.png' });
    const channelsImage = new AttachmentBuilder(channelsPath, { name: 'CHANNELS.png' });
    const rolesAndRewardsImage = new AttachmentBuilder(rolesAndRewardsPath, { name: 'ROLES_AND_REWARDS.png' });
    const staffTeamImage = new AttachmentBuilder(staffTeamPath, { name: 'STAFF_TEAM.png' });
    const FAQImage = new AttachmentBuilder(FAQPath, { name: 'FAQ.png' });

    const colleiEmoji = new AttachmentBuilder(colleiKnifePath, { name: 'collei-knife.png' });
    const cynoEmoji = new AttachmentBuilder(cynoPeekPath, { name: 'cyno-peek.png' });
    const doriEmoji = new AttachmentBuilder(doriPopcornPath, { name: 'dori-popcorn.png' });
    const nahidaEmoji = new AttachmentBuilder(nahidaHopefulPath, { name: 'nahida-hopeful.png' });
    const nilouEmoji = new AttachmentBuilder(nilouWavePath, { name: 'nilou-wave.png' });
    const tighnariEmoji = new AttachmentBuilder(tighnariThonkPath, { name: 'tighnari-thonk.png' });

    const introductionEmbed = new EmbedBuilder()
      .setTitle("      «« ━━ ✦・Server Directory・✦ ━━ »»     ")
      .setDescription(dedent`**Welcome to our server directory!** This server directory provides an overview of our server's purpose, channels, roles, and further info. Enjoy!
      
      ${dividerSection}`)
      .setColor(primaryColour)
      .setImage('attachment://OUR_COMMUNITY.png');

    const aboutUsEmbed = new EmbedBuilder()
      .setTitle("»» About Us ««")
      .setDescription(dedent`**Sumeru Akademiya** is a Genshin Impact community server dedicated to providing a fun and engaging environment for players to interact and share their experiences with the game.
      
      We focus on exploring and celebrating Genshin Impact's rich lore! Join us for events and projects that bring the lore of Teyvat to life!
      
      ${dividerSection}`
      )
      .setColor(primaryColour)
      .setThumbnail('attachment://collei-knife.png')
      .setImage(emptyImage);

    const socialMediaEmbed = new EmbedBuilder()
      .setTitle("»» Social Media ««")
      .setDescription(dedent`Stay connected with us by following us on our social media platforms to get the latest updates, events, and projects! Here's where you can find us:
      
      **Twitter:** [Click here](https://twitter.com/sumeruakademiya)
      
      **Instagram:** [Click here](https://www.instagram.com/thegenshinplace/)

      **Tiktok:** [Click here](https://www.tiktok.com/@sumeruakademiya)
      
      **YouTube:** [Click here](https://www.youtube.com/@sumeru_akademiya)
      
      **Discord:** [Click here](https://discord.gg/sumeruakademiya)
      
      **Kofi:** [Click here](https://ko-fi.com/genshinplace)
      
      ${dividerSection}`)
      .setColor(primaryColour)
      .setThumbnail('attachment://nahida-hopeful.png')
      .setImage('attachment://SERVER_FOCUS.png');
    
    const serverFocusEmbed = new EmbedBuilder()
      .setTitle("»» Server Focus ««")
      .setDescription(dedent`**Sumeru Akademiya** serves as a place for everyone to have casual chats and hang out, regardless of whether they play Genshin Impact! We often plan lore-related projects and events too!
      
      **Here's what you can expect from the server:**
      
      **1.** Events and projects that celebrate Genshin Impact's lore.
      **2.** A welcoming and friendly community.
      **3.** Channels for discussing Genshin Impact, lore, and more.
      **4.** Channels for sharing art, fanfiction, and other creations.
      
      ${dividerSection}`)
      .setColor(primaryColour)
      .setThumbnail('attachment://nilou-wave.png')
      .setImage('attachment://CHANNELS.png');

    const channelsFirstEmbed = new EmbedBuilder()
      .setTitle("»» Channels ««")
      .setDescription(dedent`
      __**Welcome**__
      • <#975177936929951776> - Rules & Guidelines for server participation - important!
      • <#959490799446425681> - Welcome channel for new members!
      • <#1250076975721349202> - Roles for server participation & customisation.
      
      __**Important**__
      • <#997683565645004860> - A directory explaining the server's structure. You're here!
      • <#1009431302564487208> - Apply for server staff here.
      • <#1015814731749146634> - Explains the rewards for donating to our kofi, and a thank you to our donors.
      • <#975005257346215936> - A channel to announce partnerships with other servers.
      • <#959483271358578728> - Suggest ideas for the server here!
      • <#997685316204888104> - Contact staff for support here.
      • <#960763882270523444> - The hall of hame (or shame) where the best messages are showcased.

      __**Information Bulletin**__
      • <#959571687412748288> - Announcements for server-wide events and projects. Get the <@&959723574669742131> role to be notified of these announcements.
      • <#975005386283315240> - A channel for Genshin Impact news, announcements, and updates. Get the <@&986045367403561020> role to be notified of these updates, and the <@&975003487815471124> role to be notified of primogem codes.
      • <#963662189477113886> - A channel for server-wide events, contests and giveaways! Get the <@&975003820973236234> role to be notified of these events.
      
      __**General**__
      • <#960162599570386974> - General chat generally for general conversation.
      • <#960573254689497209> - General, but 中文.
      • <#960716269458444318> - A channel for sharing memes.
      • <#960777418778492948> - Grass. Just grass. Touch some. (Irl Images & Conversation)
      • <#962544072227180564> - Discuss only the most quality (or not) of anime.
      • <#1006113003520938034> - Share your original (made by you) art, be it drawn, musical, or otherwise here.
      • <#960716298965352549> - Share all art here! Remember to credit the artist if it's not yours.
      
      ${dividerSection}`)
      .setColor(primaryColour)
      .setThumbnail('attachment://tighnari-thonk.png')
      .setImage(emptyImage);

    const channelsSecondEmbed = new EmbedBuilder()
      .setDescription(dedent`
      __**Genshin Impact**__
      
      • <#959603299483521065> - General chat generally for general conversation - Genshin Edition.
      • <#961736797384232990> - Cope or flex your RNG, be it wishes or artifacts here.
      • <#961736752249307176> - Converse about the latest patch here. No spoilers anywhere else!
      • <#961736624117534730> - Beware, here be leeks! Discuss leaks here. *No guarantee of protection from the Hoyoverse Leak Hunt Decree.
      
      __**Lore Discussion**__
      • <#975017101142147143> - Guidelines on discussion and participation in the Lore Discussion channels!
      • <#975196470150066227> - Updates about official lore and theory posts from The Genshin Place lore team!
      • <#975017063359840306> - For all things lore related! (Except discussions which relate to spoiler and leaked content)
      • <#975017132020605048> - Created a new theory? Want to argue for or against an existing theory? Then this is the place for you!
      • <#975017235552821248> - Lore discussions involving leaked content!

      __**Voice Channels**__
      • <#964767139221368893> - Fufill your dreams of being a DJ here. Refer to pins for commands.
      • <#959602974433374219> - Do the speak with the voice. (General voice chat)
      • <#961532866951524402> - Relax with only the lofi-est of beats.

      __**Fun & Games**__
      • <#975006848031813642> - Feel like spamming but don't want to get the hammer? Release all that energy here!
      • <#964378849817292844> - A random question. Every day. Answer if you wish.
      • <#1162963301588815922> - Help grow Irminsul. Use the button to water the tree.
      • <#1006419310731866152> - Genshin wishing simulator. Unlocked at server level 10!
      • <#1006419418886193233> - Trading simulator. Unlocked by donating to the kofi!

      __**Bot Playground**__
      • <#972101574732152862> - Test out bot commands here! Instructions in pins.
      • <#970173175998603334> -  Use /bump to help advertise our server on Disboard! (Thanks <3)
      • <#1251511144057798716> - ??? You're actually reading these? I'm shocked. DM <@448795804153675779> the phrase "Valar Morghulis" for a cookie.
      • <#972408063044771870> - Bot commands, but for games. Use it when you're playing a game on one of the bots.
    
      __**r/place Museums**__
      Archived channels from the 2022 and 2023 r/place events. Enjoy the memories!
      
      ${dividerSection}`)
      .setColor(primaryColour)
      .setImage('attachment://ROLES_AND_REWARDS.png');
    
    const rolesEmbed = new EmbedBuilder()
      .setTitle("»» Roles and Rewards ««")
      .setDescription(dedent`
      You can pick up roles in <#1250076975721349202>! But apart from that, we also have some level roles you can get from chatting in the server! Here's a list of them, and their accompanying rewards:

      __**Level Roles**__

      <@&973204764278013973> 
      • Image Embed Permissions
      • Ability to speak in the voice chats! Note: You can always ask mods to allow you to speak in voice chats if you don't have this role.

      <@&973204886491656193>
      • Access to Lumine Bot - a Genshin Wish Bot!

      **Levels 15 - 65**
      <@&973204943777443911>

      <@&973204983203909672>

      <@&973205037037805610>
      
      <@&973205233729671188>

      <@&973205327745003540>

      <@&973205432401272862>

      <@&973319826082762802>

      <@&973320326568099890>

      <@&973320407002251295>

      <@&973320467005988874>

      <@&973320509578170428>
      • No perks here, but the role looks cool!

      <@&973320558370488351>
      • Veteran Status with the <@&970242274527166485> role + Access to the Veteran Channel!

      <@&973320594626056252>

      <@&973320756022886400>

      <@&1249894484544589854>
      • Displayed on the sidebar!

      <@&1249894631127384105>
      • The most dedicated of the dedicated. All grass trembles before you.

      __**Special Roles**__

      <@&975193229047787650>
      • A special role for a birthday boy/girl! DM a mod to get this role on your birthday!

      <@&986046171367759892>
      • Given to those who donate to the server Ko-fi! Thank you for your support!

      <@&960645172742475868>
      • Given to those who have boosted the server! Thank you for your support!
      
      ${dividerSection}`)
      .setColor(primaryColour)
      .setThumbnail('attachment://cyno-peek.png')
      .setImage('attachment://STAFF_TEAM.png');

    const staffEmbed = new EmbedBuilder()
      .setTitle("»» Staff Team ««")
      .setDescription(dedent`
      **Sumeru Akademiya's** staff team is built around the idea of cooperation and teamwork. Our staff members are here to ensure that the server runs smoothly and that everyone has a good time.
      
      The staff teams frequently work together on projects, such as the social media posts, server events, and lore projects. If you're interested in joining the staff team, check out <#1009431302564487208> for more information!
      
      __**The Council**__
      • <@&959702592924041258> - The Council is the admin team of the server, who faciliate inter-team communication and overall server development.

      **Council Members:**
      • <@448795804153675779> - Mystic
      • <@446109252440817676> - Slug
      • <@271576557619773440> - Renvi
      • <@257341908924366848> - Karezi
      • <@950240936456257557> - 11th
      
      __**The Moderation Team**__
      • <@&973517437716791296> - The Moderation Team is responsible for enforcing the server rules and ensuring that the server remains a safe and welcoming place for everyone.

      **Moderators:**
      • <@257341908924366848> - Karezi, Mod Lead (General Mahamatra)
      • <@570013288977530880> - Chu, Deputy Mod Lead
      • <@540156299137122324> - Elecwizer, Mod
      • <@327319719201734658> - Reu, Mod
      • <@183414263430381569> - Winter, Mod
      • <@657983869676683284> - Electro, Mod
      • <@283565767012777995> - Ennvi, Mod
      • <@366688020449198080> - Dani, Trial Mod
      • <@429829335718035466> - Rindou, Trial Mod
      • <@911042005113643070> - Chalker, Trial Mod
      
      __**The Lore Team**__
      • <@&975017365131636766> - The Lore Team is responsible for creating and managing the server's lore projects and events.

      **Lore Team Members:**
      • <@448795804153675779> - Mystic, Lore Lead
      • <@439299381041168385> - Potato, Deputy Lore Lead
      • <@815496623936765984> - Rom
      • <@958225699787911218> - Harmony
      • <@659339331722280975> - Velocity
      • <@704863223291183166> - Jester
      • <@1099757670392676423> - Indigo
      • <@713842953122086925> - Implicit
      
      __**The Media Team**__
      • <@&976709850195185664> - The Media Team is responsible for creating and managing the server's social media accounts and content, as well as designing all things art!

      **Media Team Members:**
      • <@271576557619773440> - Renvi, Media Lead
      • <@446109252440817676> - Slug, Deputy Media Lead
      • <@422161671675576321> - Noodle
      • <@401899445354233856> - Silver
      • <@750161706247782472> - Akagi
      • <@257341908924366848> - Karezi
      • <@553857118248370197> - Marusi

      __**The Event Team**__
      • <@&961447200691466281> - The Events Team is responsible for creating and managing the server's events and contests.

      **Event Team Members:**
      • <@950240936456257557> - 11th, Event Lead
      • <@401899445354233856> - Silver, Deputy Event Lead
      • <@422161671675576321> - Noodle, Acting Event Lead
      • <@480201452724158465> - Ottlight
      • <@657983869676683284> - Electro
      • <@248929923379494912> - Pig
      • <@656078449861197833> - Blacke
      • <@446109252440817676> - Slug
      
      __**The Developer Team**__
      • <@&976831414563659867> - The Developer Team is responsible for creating and managing the server's bots and other technical aspects.

      **Developer Team Members:**
      • <@448795804153675779> - Mystic, Developer Lead
      • <@570013288977530880> - Chu, Deputy Developer Lead
      • <@950240936456257557> - 11th
      • <@446109252440817676> - Slug
      
      ${dividerSection}`)
      .setColor(primaryColour)
      .setThumbnail('attachment://dori-popcorn.png')
      .setImage('attachment://Contact_The_Mods.png');
    
    const contactUsEmbed = new EmbedBuilder()
      .setTitle("»» Contact Us ««")
      .setDescription(dedent`
      To contact the staff team, please open a ticket in <#997685316204888104> and a staff member will assist you as soon as possible. 
      
      For situations requiring immediate and urgent attention, please ping the <@&959702592924041258>, or <@&973517437716791296> anywhere in the server. If you require privacy, please DM an Administrator, or if none are online, a moderator directly.
      
      Please keep in mind that all staff are volunteers, so we appreciate your patience and understanding. Thank you!
      
      ${dividerSection}`)
      .setColor(primaryColour)
      .setImage('attachment://FAQ.png');
    
    const FAQEmbed = new EmbedBuilder()
      .setTitle("»» FAQ ««")
      .setDescription(dedent`
      **Q: How do I get a custom role?**
      A: You can get a custom role by donating to our Ko-fi! Check <#1015814731749146634> for more information.

      **Q: How do I get a birthday role?**
      A: DM a mod on your birthday to get a special birthday role!

      **Q: I'd like to apply for staff? Where do I sign up?**
      A: Check out <#1009431302564487208> for more information on applying for staff!

      **Q: Hmm... staff seems like too much work. Can I just submit some ideas and feedback?**
      A: Absolutely! We love hearing from our community. Submit your ideas and feedback in <#959483271358578728>!

      **Q: Where can I see the server's banned words list?**
      A: You can find the list of banned words in <#975177936929951776>! You may also use the keyphrase summon-rules to see the list.

      **Q: Can I appeal warnings/bans?**
      A: Yes! You can appeal warnings and bans by filling out the form [here](https://forms.gle/PCnNnwM5B8hVx19KA). Please read through the criteria which will be considered for your appeal.

      **Q: How do I report a user?**
      A: You can report a user by opening a ticket in <#997685316204888104> with the user's ID and the reason for the report. Please provide screenshots if possible.

      **Q: My server's interested in a partnership! How can I apply?**
      A: First off, thank you for your interest! You can apply for a partnership by opening a ticket in <#997685316204888104>. 

      Please let us know what you'd like to see in this partnership, how you would like to collaborate, and lastly please provide a link to your server!

      **Q: I have a question that isn't answered here. Who do I ask?**
      A: You can ask any staff member in <#997685316204888104>! We're always happy to help!
  
      ${dividerSection}`)
      .setThumbnail('attachment://dori-popcorn.png')
      .setColor(primaryColour)
      .setImage(emptyImage);

    const scrollEmbed = new EmbedBuilder()
      .setDescription(dedent`[Scroll To Top!](https://discord.com/channels/959483151862878240/997683565645004860/1009646032780546118)`)
      .setColor(primaryColour)
      .setImage(emptyImage);

    await message.channel.send({ embeds: [introductionEmbed], files: [headerImage] });
    await message.channel.send({ embeds: [aboutUsEmbed] });
    await message.channel.send({ embeds: [socialMediaEmbed], files: [serverFocusImage] });
    await message.channel.send({ embeds: [serverFocusEmbed], files: [channelsImage]});
    await message.channel.send({ embeds: [channelsFirstEmbed] });
    await message.channel.send({ embeds: [channelsSecondEmbed], files: [rolesAndRewardsImage] });
    await message.channel.send({ embeds: [rolesEmbed], files: [staffTeamImage]});
    await message.channel.send({ embeds: [staffEmbed], files: [contactTheMods]});
    await message.channel.send({ embeds: [contactUsEmbed], files: [FAQImage] });
    await message.channel.send({ embeds: [FAQEmbed] });
    await message.channel.send({ embeds: [scrollEmbed] });

    // await message.channel.send({ embeds: [introductionEmbed], files: [headerImage] });
    // await message.channel.send({ embeds: [aboutUsEmbed], files: [colleiEmoji] });
    // await message.channel.send({ embeds: [socialMediaEmbed], files: [serverFocusImage, nahidaEmoji] });
    // await message.channel.send({ embeds: [serverFocusEmbed], files: [channelsImage, nilouEmoji]});
    // await message.channel.send({ embeds: [channelsFirstEmbed], files: [tighnariEmoji] });
    // await message.channel.send({ embeds: [channelsSecondEmbed], files: [rolesAndRewardsImage] });
    // await message.channel.send({ embeds: [rolesEmbed], files: [staffTeamImage, cynoEmoji]});
    // await message.channel.send({ embeds: [staffEmbed], files: [contactTheMods]});
    // await message.channel.send({ embeds: [contactUsEmbed], files: [FAQImage] });
    // await message.channel.send({ embeds: [FAQEmbed], files: [doriEmoji]});
    // await message.channel.send({ embeds: [scrollEmbed] });
  }
}

export default serverDirectoryNew;