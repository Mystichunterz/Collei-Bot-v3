/* -------------------------
[File Information]
Author: mystichunterz
------------------------- */

console.log("----------------------");
console.log("responses > server_resources > serverDirectory.js");
console.log("----------------------");

//----------------------
//  imports
//----------------------
import Response from "../../classes/Response.js";
import { EmbedBuilder } from "discord.js";

//----------------------
//  main
//----------------------
class serverDirectory extends Response {
  aliases = ["summon-server-directory"];
  cooldown = 5 * 1000;
  accessLevel = 3;
  async run(message) {
    message.channel.send({
      embeds: [
        // Main Header
        new EmbedBuilder()
          .setDescription(
            "<:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154> **«« Server Directory »»** <:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363> <:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154> \n\n<:91_util_dot:1009306493297897555> **Welcome to our Server Directory!** <:1colleiheart_nanananans:980914654450700428> \n\n<:91_util_dot:1009306493297897555> This server directory provides an overview of our server's purpose, channels, roles, and further info. Enjoy!\n\n<:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154>"
          )
          .setColor("#00a368")
          .setImage(
            "https://cdn.discordapp.com/attachments/1006392321484525688/1009620359114399814/OUR_COMMUNITY.png"
          ),

        // Moderation Team Apps
        new EmbedBuilder()
          .setDescription(
            "**»» About Us ««**\n\n<:91_util_dot:1009306493297897555> We're a lore and community focussed community, specializing in events and projects related to Genshin's lore and community.\n\n<:91_util_dot:1009306493297897555>Come join the fun! We're always happy to have new Genshin players join us, be it participating in our events or projects or even helping to organize them!\n\n<:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_3:1009306304126390363>"
          )
          .setColor("#00a368")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/818031871215796245/1009426540804714647/colleiknife.png"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/878788560231227462/984895829640884274/bkgjh.png"
          ),
      ],
    });

    message.channel.send({
      embeds: [
        //Lore Team Apps
        new EmbedBuilder()
          .setDescription(
            "**»» Pyro Archon Mains Communities ««**\n\n[✦・Official Website](https://genshinplace.com/)\n\n[✦・Youtube Channel](https://www.youtube.com/channel/UC08Ib5yE4iD4Avr09NMJUHA)\n\n[✦・Tiktok](https://www.tiktok.com/@sumeruakademiya)\n\n[✦・Twitter](https://twitter.com/SumeruAkademiya)\n\n[✦・Instagram](https://www.instagram.com/thegenshinplace/)\n\n<:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226>"
          )
          .setColor("#00a368")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/818031871215796245/1009425125269053520/Nadiha-Hopeful.png"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/1006392321484525688/1009620359768723486/SERVER_FOCUS.png"
          ),

        //Event Team Apps
        new EmbedBuilder()
          .setDescription(
            "**»» Server Focus ««**\n\n<:91_util_dot:1009306493297897555> This server serves as our community's main base where everyone, regardless of whether they play Genshin Impact, is welcome. \n\n<:91_util_dot:1009306493297897555> It's a place for members to have casual chats and hang out. They often discuss Genshin's Lore and craft theories, too!\n\n<:91_util_dot:1009306493297897555> Additionally, both regular members and server staff often plan community projects such as YouTube videos, and entries on the Lore Website, in the server.\n\n<:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226>"
          )
          .setColor("#00a368")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/818031871215796245/1009427039754920037/nilouwave.png"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/959743237478842438/1009644561288671293/CHANNELS.png"
          ),
      ],
    });

    message.channel.send({
      embeds: [
        //Design Team Apps
        new EmbedBuilder()
          .setDescription(
            "**»» Channels««**\n\n<:91_util_dot:1009306493297897555> *__Welcome__*\n• <#959490799446425681> - A welcome channel for new members.\n• <#975177936929951776> - Important rules & guidelines for server participation.\n• <#959708759784038400> - Acquire self-roles for your name color, alerts, region, and pronouns here.\n\n<:91_util_dot:1009306493297897555> *__Important__*\n• <#997683565645004860> - A directory explaining the server's structure. You are here.\n• <#975005257346215936> - Partnership announcements with other servers will be shared here.\n• <#959483271358578728> - Suggest changes and improvements for the server here.\n• <#960763882270523444> - Server highlights are shared here.\n• <#997685316204888104> - Create a support ticket request here for staff assistance.\n\n<:91_util_dot:1009306493297897555> *__Information Bulletin__*\n• <#959571687412748288> - Server structure and miscellaneous updates will be shared here.\n• <#963662189477113886> - Event announcements for this server will be shared here..\n• <#975005386283315240> - The announcement channel from the official Genshin server is linked here. Primogem codes will also be shared here.\n\n<:91_util_dot:1009306493297897555> *__Events__*\n• <#984720582962716672> - Extra information not shared in the original announcement may be shared here.\n• <#976761351160614942> - Open chat for discussing ongoing server events.\n• <#982648113904910437> - Open chat for regular Karaoke sessions.\n\n*__Lore Discussion__*\n• <#975017101142147143> - Guidelines on discussion and participation in the Lore Discussion \u2800• channels! \n• <#975196470150066227> - Updates about official lore and theory posts from The Genshin Place lore team!\n• <#992718858832060416> - Information on lore from sources both official and unofficial!\n• <#975017063359840306> - For all things lore related! (Except discussions which relate to spoiler and leaked content)\n• <#975017132020605048> - Created a new theory? Want to argue for or against an existing theory? Then this is the place for you!\n• <#975017235552821248> - Lore discussions involving leaked content!\n\n<:91_util_dot:1009306493297897555> *__General__*\n• <#960162599570386974> - General chat for any and all casual chat.\n• <#959595543313649744> - Includes threads dedicated to other game talks. These include Honkai, Tower of Fantasy, and Pokémon! \n• <#960716269458444318> - A place to post your favorite memes or off topic items you find funny!\n• <#960777418778492948> - Irl pictures of food, scenery, and more. \n• <#962544072227180564> - Discussion of anime.\n• <#960716298965352549> - Cool art from other artists, please do credit the respective artists.\n• <#1006113003520938034> - Original creations from our members! Be sure to promote yourself!\n\n"
          )
          .setColor("#00a368")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/959743237478842438/1009432813478617148/tighnari-thonk.png"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/878788560231227462/984895829640884274/bkgjh.png"
          ),

        //Developer Team Apps
        new EmbedBuilder()
          .setDescription(
            "<:91_util_dot:1009306493297897555> *__Genshin Impact__*\n• <#959603299483521065> - General chat, but for genshin discussion.\n• <#961736797384232990> - Flex and/or cry about your Genshin luck. Wishes, Artefact rolls, or anything you may pray to RNGesus for.\n• <#961736752249307176> - Where any conversations related to patch spoilers should be held. \n• <#961736624117534730> - Where any conversations related to leaked material should be held.\n\n<:91_util_dot:1009306493297897555> *__The OC Hub__*\n• <#975016778931515472> - For OC related Announcments.\n• <#963391355000856676> - Images related to OC's.\n• <#967065525341540382> - Spot for all OC related discussions.\n\n<:91_util_dot:1009306493297897555> *__Voice Channels__*\n• <#961405951485833246> - Text chat for those in VC that are micless and voiceless.\n• <#964767139221368893> - Where commands for the music bot, Probot, are used.\n• <#959602974433374219> - Where general voice conversations take place. \n• <#961532866951524402> - 24/7 Lofi Music.\n\n<:91_util_dot:1009306493297897555> *__Fun & Games__*\n• <#964378849817292844> - A random question. Every day. Answer if you wish.\n• <#975006848031813642> - Release your inner urge to spam. Note: XP has a 5 minute cooldown.\n• <#1006419310731866152> - A wish bot channel (Unlocked at server level 10 and up!)\n\n<:91_util_dot:1009306493297897555> *__Bot Headquarters__*\n• <#970173175998603334> - Use /bump to help advertise our server on Disboard!\n• <#972101574732152862> - Miscellaneous bot commands\n• <#972408063044771870> - Fun with bot minigames. \n\n<:91_util_dot:1009306493297897555> *___r/place Museum__*\n\n<:9_util_arrow:1008997496434982922> A gallery for our chats and archives from the r/place event on Reddit, which took place in April 2022.\n\n• <#959483152554950658> - The original general-chaos chat from the r/place era.\n• <#959568465314873344> - Where negotiations with other communities were held.\n• <#959780050784370708> - Announcements relating to other communities. Mainly spam pings for aid and defence. \n• <#999365637942022186> - The archive of our accomplishments, mainly artwork, and an overview of the r/place canvas\n<:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226>"
          )
          .setColor("#00a368")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/959712273373478962/1009427267182665830/cynopeek_copy.png"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/959743237478842438/1009644325946273822/ROLES__REWARDS.png"
          ),
      ],
    });

    message.channel.send({
      embeds: [
        //Marketing Team Apps
        new EmbedBuilder()
          .setDescription(
            "**»» Roles & Rewards ««**\n\n<:91_util_dot:1009306493297897555> Members can pick up self-assigned roles in <#959708759784038400>! These include colour roles (visions!), pronoun roles, region roles, and ping/alert roles.\n\n*__Level Roles__*\n\n<:91_util_dot:1009306493297897555>  Members earn experience by participating in our text and voice channels. \n\n<:9_util_arrow:1008997496434982922> Experience is used to unlock features, rewards, and bragging rights in the server. Our rewards are as follows:\n\n<:91_util_dot:1009306493297897555> <@&961747948394405888>\n \u2800•  External Emotes\n\n<:91_util_dot:1009306493297897555> <@&973204764278013973>\n \u2800•  Image Embed Permissions\n \u2800•  Access to Voice Chats!\n\n<:91_util_dot:1009306493297897555> <@&973204886491656193>\n \u2800• Access to Lumine Bot - a Genshin Wish Bot! \n\n<:91_util_dot:1009306493297897555> <@&973204943777443911>\n \u2800• No perks here, but the role looks cool!\n\n<:91_util_dot:1009306493297897555> <@&973204983203909672>\n \u2800• No perks here, but the role looks cool!\n\n<:91_util_dot:1009306493297897555> <@&973205037037805610>\n \u2800• No perks here, but the role looks cool!\n\n<:91_util_dot:1009306493297897555> <@&973205233729671188>\n \u2800• No perks here, but the role looks cool!\n\n<:91_util_dot:1009306493297897555> <@&973205327745003540>\n \u2800• No perks here, but the role looks cool!\n\n<:91_util_dot:1009306493297897555> <@&973205432401272862>\n \u2800• Veteran Status + Access to the Veteran Channel!\n\n<:91_util_dot:1009306493297897555> <@&973319826082762802>\n \u2800• No perks here, but the role looks cool!\n\n<:91_util_dot:1009306493297897555> <@&973320326568099890>\n \u2800• No perks here, but the role looks cool!\n\n<:91_util_dot:1009306493297897555> <@&973320407002251295>\n \u2800• No perks here, but the role looks cool!\n\n<:91_util_dot:1009306493297897555> <@&973320467005988874>\n \u2800• No perks here, but the role looks cool!\n\n<:91_util_dot:1009306493297897555> <@&973320509578170428>\n \u2800• No perks here, but the role looks cool!\n\n<:91_util_dot:1009306493297897555> <@&973320558370488351>\n \u2800• Displayed on the sidebar!\n\n<:91_util_dot:1009306493297897555> <@&973320594626056252>\n \u2800• Displayed on the sidebar!\n\n<:91_util_dot:1009306493297897555> <@&973320756022886400>\n \u2800• Displayed on the sidebar!\n\n<:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226>"
          )
          .setColor("#00a368")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/818031871215796245/1009426738230603876/doripopcorn.png"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/878788560231227462/984895829640884274/bkgjh.png"
          ),

        new EmbedBuilder()
          .setDescription(
            "*__Legacy Roles__*\n\nRemnants of a time long past, legacy roles could only be obtained during the r/place event of April 2022. If you have them, keep them as a memory of the days of the Genshin Place.\n\n<:91_util_dot:1009306493297897555> <@&959568283441459270> - Beloved representatives from other communities for alliance negotiations during r/place.\n<:91_util_dot:1009306493297897555> <@&959723717007646790> - Trusted members from r/place, during a time when sabetours and spies ran rampant.\n<:91_util_dot:1009306493297897555> <@&959865783532531713> - Sworn swords who swore an oath to defend Chibi Venti, during r/place.\n<:91_util_dot:1009306493297897555> <@&959723614670827581> - Valiant defenders of our territory during r/place. Pinged incessantly.\n<:91_util_dot:1009306493297897555> <@&959715801588453417> | Everyone - A member present since the days of r/place.\n\n*__Special Roles__*\n\n<:91_util_dot:1009306493297897555> <@&975193229047787650> - Temporary role for a day, for the special people celebrating their birthday. Request it from a mod/admin if it's indeed your day of birth.\n\n<:91_util_dot:1009306493297897555> <@&986046171367759892> - Given to those who donate to the server Ko-fi!\n\n<:91_util_dot:1009306493297897555> <@&960645172742475868> - Given to those who boost the server!\n\n\n<:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226><:92_util_vine_2:1009306293938438154><:92_util_vine_3:1009306304126390363><:92_util_vine_1:1009306283523977226>"
          )
          .setColor("#00a368")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/818031871215796245/1009426738230603876/doripopcorn.png"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/959743237478842438/1009644188066914304/STAFF_TEAM.png"
          ),
      ],
    });

    message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setDescription(
            "<:91_util_dot:1009306493297897555> The server's staff structure is built around the idea of cooperatively working on projects. It is composed of the Administrator team (The Council) and 6 staff teams (the Moderator Team, the Lore Team, the Design Team, the Developer Team, the Event Team, and the Marketing Team).\n\n*__»» The Council ««__*\n\n<:91_util_dot:1009306493297897555> The server's administrator team, referred to as the council, is composed of 12 administrators, 6 of whom are Team Leaders and one of whom is the server owner. It is, in form, a server team. \n\n<@&960729593302622238> « Owner of the Server!  »\n<@&959702592924041258> « A Member of the Council »\n\n0. <:931_util_icon_mystic:1009630867859181679> <@448795804153675779>\n1. <:93_util_icon_red:1009248136092471457> <@302253160309850122>\n2. <:93_util_icon_slug:1009247731920928788> <@446109252440817676>\n3. <:93_util_icon_waffles:1009248174008975411> <@846499373604798494>\n4. <:93_util_icon_mia:1009248209203380224> <@506569585428791296>\n5. <:93_util_icon_renvi:1009247816754929794> <@271576557619773440>\n6. <:93_util_icon_IRAS:1009247772114948106> <@372847488102694923>\n7. <:93_util_icon_bread:1009248090617806910> <@225344247035854848>\n8. <:93_util_icon_qiqi:1009248039384395907> <@711588486456541207>\n9. <:93_util_icon_11th:1009248004236136539><@950240936456257557>\n\n"
          )
          .setColor("#00a368")
          .setImage(
            "https://cdn.discordapp.com/attachments/878788560231227462/984895829640884274/bkgjh.png"
          ),

        new EmbedBuilder()
          .setDescription(
            "*__»» Staff Teams ««__*\n\n" +
            "<:91_util_dot:1009306493297897555> Teams are composed of a Team Leader, a Deputy Team Leader, and the Team Members. Each team has a trial role variant for new additions to the team.\n\n" +
            "<@&973517437716791296> « Moderator Team »\n" +
            "<:91_util_dot:1009306493297897555> The team charged with keeping the peace within the server. \n\n" +
            "<:93_util_icon_red:1009248136092471457> **Team Lead/General Mahamatra:** <@302253160309850122>\n\n" +
            "__**Moderators**__\n" +
            "• <@257341908924366848>\n" +
            "• <@570013288977530880>\n" +
            "• <@540156299137122324>\n" +
            "• <@327319719201734658>\n" +
            "• <@930342355695992894>\n\n" +
            "<@&975017365131636766> « Lore Team »\n" +
            "<:91_util_dot:1009306493297897555> The team responsible for managing lore-related tasks and projects.\n\n" +
            "<:93_util_icon_qiqi:1009248039384395907> **Team Lead/Master of Lore:** <@711588486456541207>\n" +
            "**Team Deputy/Deputy Master of Lore: ** Unoccupied\n\n" +
            "__**Lore Team**__\n" +
            "• <@439299381041168385>\n" +
            "• <@324333140057260032>\n" +
            "• <@815496623936765984>\n" +
            "• <@1049006771018137671>\n\n" +
            "<@&976709850195185664> « Design Team »\n" +
            "<:91_util_dot:1009306493297897555> The team responsible for handling art, design, and writing-related tasks and projects.\n\n" +
            "<:93_util_icon_renvi:1009247816754929794> ** Team Lead/Master of Artistry: **<@271576557619773440>\n" +
            "<:93_util_icon_slug:1009247731920928788>**Team Deputy/Deputy Master of Artistry: **<@446109252440817676>\n\n" +
            "__**Design Team**__\n" +
            "• <@422161671675576321>\n" +
            "• <@401899445354233856>\n" +
            "• <@750161706247782472>\n" +
            "• <@324333140057260032>\n\n" +
            "<@&961447200691466281> « Event Team »\n" +
            "<:91_util_dot:1009306493297897555> The team responsible for organising and executing events and games.\n\n" +
            "<:93_util_icon_11th:1009248004236136539> ** Team Lead/Master of Tournaments: <@950240936456257557>**\n" +
            "**Team Deputy/Deputy Master of Tournaments: **<@401899445354233856>\n\n" +
            "__ ** Event Organisers ** __\n" +
            "• <@446109252440817676>\n" +
            "• <@422161671675576321>\n" +
            "• <@960072768026722315>\n" +
            "• <@656078449861197833>\n" +
            "• <@750161706247782472>\n" +
            "• <@225364844507824129>\n \n" +
            "<@&980311828901019659> « Marketing Team »\n" +
            "<:91_util_dot:1009306493297897555> The team responsible for forming and managing partnerships with other servers, as well as managing the community's social media accounts.\n\n" +
            "<:93_util_icon_mia:1009248209203380224> ** Team Lead/Master of Marketing: <@506569585428791296>**\n" +
            "<:93_util_icon_waffles:1009248174008975411> **Team Deputy/Deputy Master of Marketing: **<@846499373604798494>\n\n" +
            "__**Marketing Team**__\n" +
            "• <@543409023307743242>\n" +
            "• <@446109252440817676>\n" +
            "• <@856856836216455169>\n" +
            "• <@324333140057260032>\n\n" +
            "<@&976831414563659867> « Developer Team »\n" +
            "<:91_util_dot:1009306493297897555> The team responsible for handling server projects related to code and dev-work, such as website maintenance and bot work.\n\n" +
            "<:93_util_icon_bread:1009248090617806910> ** Team Lead/Master of Mechanics: <@225344247035854848>**\n" +
            "**Team Deputy/Deputy Master of Mechanics: Unoccupied**\n\n" +
            "__**Developers**__\n" +
            "• <@225364844507824129>\n" +
            "• <@446109252440817676>\n" +
            "• <@570013288977530880>\n" +
            "• <@950240936456257557>\n"
          )
          .setColor("#00a368")
          .setImage(
            "https://cdn.discordapp.com/attachments/1006392321484525688/1009620358455902218/CONTACT_US.png"
          ),

        new EmbedBuilder()
          .setDescription(
            "*__»» Contact Us ««__*\n\n<:91_util_dot:1009306493297897555> To report concerns/issues to the moderator team, open a ticket to speak with the mod team in <#997685316204888104> You can expect a response from the moderator staff within 48 hours.\n\n<:9_util_arrow:1008997496434982922> For situations requiring immediate and urgent attendance of the server's staff (ex. banning an account running a Nitro scam), please feel free to DM multiple Admins/Moderators with an explanation of the situation. \n\n<:9_util_arrow:1008997496434982922> Keep in mind staff are not employed by the server in any sense. Listen to and respect the volunteers that keep this server running.\n"
          )
          .setColor("#00a368")
          .setImage(
            "https://cdn.discordapp.com/attachments/1006392321484525688/1009620358778867742/FAQ.png"
          ),
      ],
    });

    message.channel.send({
      embeds: [
        new EmbedBuilder()

          .setDescription(
            "*__»» FAQ ««__*\n\n<:91_util_dot:1009306493297897555> **I love the server, and I want to contribute! How do I apply for staff? **\n\nWhen we are looking to expand our staff team, we'll open our staff applications and announce this in server announcements. You may also visit our 24/7 applications channel and check the application status of specific teams. Do keep in mind some of our positions may have certain requirements for qualification, such as personality traits and skills related to the position.\n\nIf you are interested in joining the team, please wait patiently for the next application wave. Pinging or DMing mods will not improve your chances of being accepted. \n\n<:91_util_dot:1009306493297897555> **Hmm… applying for staff seems like too much work. Where can I submit ideas or feedback for this server instead?**\n\nIf you have ideas and suggestions to improve our server, feel free to post them in <#959483271358578728>! We'll be happy to review them. Do keep in mind not all suggestions will be approved for various reasons. At the same time, do exercise a degree of sensibility when submitting suggestions and ideas.\n\n<:91_util_dot:1009306493297897555> **Where can I access the server's banned words list?**\n\nA list of banned and discouraged words can be found in <#975177936929951776> along with a comprehensive list of server rules. You may also use the command h!bannedwords in <#972101574732152862>.\n\n<:91_util_dot:1009306493297897555> **Can I appeal warnings/bans?** \n\nBoth warnings and bans can be appealed through this google document [here](https://forms.gle/PCnNnwM5B8hVx19KA). Moderation staff will review your case and get back to you within 72 hours. Be sure to read through the criteria which may affect the chances of your appeal being approved prior to submitting an appeal.\n\n"
          )
          .setColor("#00a368")
          .setImage(
            "https://cdn.discordapp.com/attachments/878788560231227462/984895829640884274/bkgjh.png"
          ),

        new EmbedBuilder()
          .setDescription(
            "<:91_util_dot:1009306493297897555> **How do I avoid leaks in this server?** \n\nLeaks should be kept within <#961736624117534730> or <#975017235552821248> . If you would like to keep away from leaked information, these channels are not for you. Leaks may also be shared in <#961736752249307176> for more short term quest/story leaks. If you are to see a member posting leaks in the incorrect channels, let a staff member know as soon as possible.\n\n<:91_util_dot:1009306493297897555> **Will pinging staff get me in trouble? **\n\nPinging staff is an important part of the server, this helps let us know if something is amiss in the server. However, an appropriate context exists. \n\n<:9_util_arrow:1008997496434982922> Admins: Admins may be pinged for any inquiry. \n<:9_util_arrow:1008997496434982922> Moderation Team: Moderators may be pinged for questions about what is/is not allowed or even as an alert for something going against the rules. \n<:9_util_arrow:1008997496434982922> Lore Team: Lore team may be pinged to ask for clarification on a lore tidbit or for any lore-related topics. \n<:9_util_arrow:1008997496434982922> Event Team: Event team is available to be pinged for clarification on rules for events or other questions about events.\n<:9_util_arrow:1008997496434982922> Design Team: Design team may be pinged for questions pertaining to newsletter features or other newsletter questions. Emote suggestions/submissions may also be done in this way. \n<:9_util_arrow:1008997496434982922> Developer Team: Developer team is to only be pinged if there are bug reports to be made about the server's website or bots. \n\nAbuse of any of these ping's include incessant or spam pinging. If this action is done towards any member it falls under the inappropriate category and will not be tolerated. \n\n<:91_util_dot:1009306493297897555> **I  saw a member of this server post something inappropriate on another server, what should I do?**\n\nOur policies on the actions of our members generally end at our server's boundaries. With the exception of heavily inappropriate and troubling material such as extremely graphic content, we likely will not take action on the involved members.  \n\n<:91_util_dot:1009306493297897555> **I encountered some issues with a staff member. How do I communicate these concerns in confidence?** \n\nOur best suggestion is to directly message this person you are having issues with, it could be caused by simple miscommunication which can be sorted out maturely. However, if this is not a viable option, feel free to message another staff member any of our moderators or admins would be happy to help. If this is also not a viable option, you may refer to <#997685316204888104> and click on the “Create Ticket” option. \n\n<:91_util_dot:1009306493297897555> **My server's interested in a partnership! How do I apply?**\n\nFirst off, thank you for your interest! We're constantly seeking new partnerships and affiliates, and the admins would be delighted to discuss it further. \n\n<@506569585428791296> (Miabunnyy#6258 if the embed fails) is the Head of Marketing in this server, with <@846499373604798494> (waffles#5436) as their deputy. For any partnership requests, DM either of them with details of your proposal/partnership offer. \n\n I'd highly recommend reading through our partnership Guidelines & Requirements [here](https://docs.google.com/document/d/1JYwAl7QIleyAHOE3Sjw2O3dpXinh5rw3y9arLWmMDAM/edit?usp=sharing).\n\n"
          )
          .setColor("#00a368")
          .setImage(
            "https://cdn.discordapp.com/attachments/878788560231227462/984895829640884274/bkgjh.png"
          ),
      ],
    });

    message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setDescription(
            "[Scroll To Top!](https://discord.com/channels/1212466912445862018/997683565645004860/1009646032780546118)"
          )
          .setColor("#00a368")
          .setImage(
            "https://cdn.discordapp.com/attachments/878788560231227462/984895829640884274/bkgjh.png"
          ),
      ],
    });
  }
}

export default serverDirectory;
