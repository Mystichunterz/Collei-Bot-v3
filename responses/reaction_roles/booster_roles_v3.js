import Response from "../../classes/Response.js";
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from "discord.js";

class roles_boosters_v3 extends Response {
  aliases = ["summon-roles-boosters-v3"];
  accessLevel = 3;
  async run(message) {
    const boosterEmbed = new EmbedBuilder()
      .setTitle("Roles | Booster Exclusive Vanity Colours")
      .setDescription(
        "Thank you for boosting the Sumeru Akademiya | TGP discord server! Customise your name colour with these roles - a small thank you from us.\n\n<:PigeonRed:1075979554688073728> | <@&969890981182849105>\n\n<:PolandballRed:1075979579853910016> | <@&969891212653908008>\n\n<:SunriseRed:1075979586208268319> | <@&969891135881359380>\n\n<:NaganoharaOrange:1075980302641537105> | <@&969891447463612460>\n\n<:SusbedoYellow:1075980465988714548> | <@&969891655006183484>\n\n<:DandelionWineYellow:1075979566088196197> | <@&969891171281301524>\n\n<:asteCarmenDeiGreen:1075979559108882432> | <@&969891990651154483>\n\n<:asteGenshrekGreen:1075980297901973584> | <@&969892111807840286>\n\n<:TouchgrassGreen:1075980468526256190> | <@&969892282792824865>\n\n<:asteYakshasTeal:1075979589727289374> | <@&969892522581168149>\n\n<:DrunkenBardTeal:1075979567417802853> | <@&969892418914758716>\n\n<:asteAlberichTeal:1075979557749932062> | <@&969896958028288061>\n\n<:KamisatoBlue:1075980300573741066> | <@&969897044791685160>\n\n<:CocogoatBlue:1075979563504504852> | <@&969897188937314334>\n\n<:SpindriftKnightBlue:1075980331418656828> | <@&969897291605479454>\n\n<:FandangIndigo:1075979568948711584> | <@&969897364548648960>\n\n<:astePeriwinkle:1075984727430922310> | <@&969891804512157696>\n\n<:QiqiPurple:1075980326477766687> | <@&969891970568835082>\n\n<:asteFischlPurple:1075980295691583560> | <@&969892206297108520>\n\n<:asteImperatrixPurple:1075980299273506887> | <@&969892311620259851>\n\n<:asteCatgirlPurple:1075979561063415858> | <@&969892494366097428>\n\n<:SakuraPink:1075980328872726588> | <@&969892602528821269>\n\n<:ShrineMaidenPink:1075980330042937445> | <@&969892759387398184>\n\n<:YanfeiPink:1076052038493945926>| <@&1076014534503972914>\n\n<:LapisDeiBrown:1075979575613460631> | <@&969895283087536148>\n\n<:ChoppingBoardBrown:1075979562040709151> | <@&969894816030806028>\n\n<:asteAbyssBlack:1075979556537761872> | <@&969894388962586685>\n\n<:SignoraGrey:1075979583293243523> | <@&969893671522684929>\n\n<:TeppeiGrey:1075980470015242280> | <@&969893509140201482>\n\n<:OsmanthusWineWhite:1075980796470513716> | <@&969890878011342848>"
      )
      .setColor("#00a368");

    const roles1 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969890981182849105")
        .setStyle("Primary")
        .setLabel("Timmie's Pigeon Red")
        .setEmoji("<:PigeonRed:1075979554688073728>"),
      new ButtonBuilder()
        .setCustomId("role-969891212653908008")
        .setStyle("Primary")
        .setLabel("Polandball Red")
        .setEmoji("<:PolandballRed:1075979579853910016>"),
      new ButtonBuilder()
        .setCustomId("role-969891135881359380")
        .setStyle("Primary")
        .setLabel("“Rising Sun” Red")
        .setEmoji("<:SunriseRed:1075979586208268319>"),
      new ButtonBuilder()
        .setCustomId("role-969891447463612460")
        .setStyle("Primary")
        .setLabel("Yoimiya Orange")
        .setEmoji("<:NaganoharaOrange:1075980302641537105>"),
      new ButtonBuilder()
        .setCustomId("role-969891655006183484")
        .setStyle("Primary")
        .setLabel("Susbedo Yellow")
        .setEmoji("<:SusbedoYellow:1075980465988714548>"),
    ]);

    const roles2 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969891171281301524")
        .setStyle("Primary")
        .setLabel("Dandelion Wine Yellow")
        .setEmoji("<:DandelionWineYellow:1075979566088196197>"),
      new ButtonBuilder()
        .setCustomId("role-969891990651154483")
        .setStyle("Primary")
        .setLabel("Carmen Dei Green")
        .setEmoji("<:asteCarmenDeiGreen:1075979559108882432>"),
      new ButtonBuilder()
        .setCustomId("role-969892111807840286")
        .setStyle("Primary")
        .setLabel("Genshrek Green")
        .setEmoji("<:asteGenshrekGreen:1075980297901973584>"),
      new ButtonBuilder()
        .setCustomId("role-969892282792824865")
        .setStyle("Primary")
        .setLabel("Grass Green")
        .setEmoji("<:TouchgrassGreen:1075980468526256190>"),
      new ButtonBuilder()
        .setCustomId("role-969892522581168149")
        .setStyle("Primary")
        .setLabel("Yaksha's Teal")
        .setEmoji("<:asteYakshasTeal:1075979589727289374>"),
    ]);

    const roles3 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969892418914758716")
        .setStyle("Primary")
        .setLabel("Drunken Bard Teal")
        .setEmoji("<:DrunkenBardTeal:1075979567417802853>"),
      new ButtonBuilder()
        .setCustomId("role-969896958028288061")
        .setStyle("Primary")
        .setLabel("Alberich Teal")
        .setEmoji("<:asteAlberichTeal:1075979557749932062>"),
      new ButtonBuilder()
        .setCustomId("role-969897044791685160")
        .setStyle("Primary")
        .setLabel("Kamisato Blue")
        .setEmoji("<:KamisatoBlue:1075980300573741066>"),
      new ButtonBuilder()
        .setCustomId("role-969897188937314334")
        .setStyle("Primary")
        .setLabel("Cocogoat Blue")
        .setEmoji("<:CocogoatBlue:1075979563504504852>"),
      new ButtonBuilder()
        .setCustomId("role-969897291605479454")
        .setStyle("Primary")
        .setLabel("Spindrift Knight Blue")
        .setEmoji("<:SpindriftKnightBlue:1075980331418656828>"),
    ]);

    const roles4 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969897364548648960")
        .setStyle("Primary")
        .setLabel("Fandango Indigo")
        .setEmoji("<:FandangIndigo:1075979568948711584>"),
      new ButtonBuilder()
        .setCustomId("role-969891804512157696")
        .setStyle("Primary")
        .setLabel("Periwinkle")
        .setEmoji("<:astePeriwinkle:1075984727430922310>"),
      new ButtonBuilder()
        .setCustomId("role-969891970568835082")
        .setStyle("Primary")
        .setLabel("QiqiFallen Periwinkle")
        .setEmoji("<:QiqiPurple:1075980326477766687>"),
      new ButtonBuilder()
        .setCustomId("role-969892206297108520")
        .setStyle("Primary")
        .setLabel("Prinzessin Purple")
        .setEmoji("<:asteFischlPurple:1075980295691583560>"),
      new ButtonBuilder()
        .setCustomId("role-969892311620259851")
        .setStyle("Primary")
        .setLabel("Imperatrix Purple")
        .setEmoji("<:asteImperatrixPurple:1075980299273506887>"),
    ]);

    const roles5 = new ActionRowBuilder().addComponents([
      new ButtonBuilder()
        .setCustomId("role-969892494366097428")
        .setStyle("Primary")
        .setLabel("Catgirl Purple")
        .setEmoji("<:asteCatgirlPurple:1075979561063415858>"),
      new ButtonBuilder()
        .setCustomId("role-969892602528821269")
        .setStyle("Primary")
        .setLabel("Sakura Pink")
        .setEmoji("<:SakuraPink:1075980328872726588>"),
      new ButtonBuilder()
        .setCustomId("role-969892759387398184")
        .setStyle("Primary")
        .setLabel("Shrine Maiden Pink")
        .setEmoji("<:ShrineMaidenPink:1075980330042937445>"),
      new ButtonBuilder()
        .setCustomId("role-1076014534503972914")
        .setStyle("Primary")
        .setLabel("Yanfei Pink")
        .setEmoji("<:YanfeiPink:1076052038493945926>"),
      new ButtonBuilder()
        .setCustomId("role-969895710432583740")
        .setStyle("Primary")
        .setLabel("Hilichurl Brown")
        .setEmoji("<:HilichurlBrown:1075979572190916739> "),
    ]);

    const roles6 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-969895283087536148")
        .setStyle("Primary")
        .setLabel("Lapis Dei Brown")
        .setEmoji("<:LapisDeiBrown:1075979575613460631> "),
      new ButtonBuilder()
        .setCustomId("role-969894816030806028")
        .setStyle("Primary")
        .setLabel("Hu Tao Brown")
        .setEmoji("<:ChoppingBoardBrown:1075979562040709151>"),
      new ButtonBuilder()
        .setCustomId("role-969894388962586685")
        .setStyle("Primary")
        .setLabel("Abyssal Black")
        .setEmoji("<:asteAbyssBlack:1075979556537761872>"),
      new ButtonBuilder()
        .setCustomId("role-969893671522684929")
        .setStyle("Primary")
        .setLabel("Signora Ash Gray")
        .setEmoji("<:SignoraGrey:1075979583293243523>"),
      new ButtonBuilder()
        .setCustomId("role-969893509140201482")
        .setStyle("Primary")
        .setLabel("Teppei Gray")
        .setEmoji("<:TeppeiGrey:1075980470015242280>")
    );

    const roles7 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-969890878011342848")
        .setStyle("Primary")
        .setLabel("Osmanthus Wine White")
        .setEmoji("<:OsmanthusWineWhite:1075980796470513716>")
    );

    message.channel.send({
      embeds: [boosterEmbed],
      components: [roles1, roles2, roles3, roles4, roles5],
    });

    message.channel.send({
      components: [roles6, roles7],
    });
  }
}

export default roles_boosters_v3;
