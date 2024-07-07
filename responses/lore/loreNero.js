import Response from "../../classes/Response.js";

class loreNero extends Response {
  aliases = ["nero lore"];
  cooldown = 5 * 1000;
  async run(message) {
    message.reply(
      `Reaction: CLASSIFIED INFORMATION PROCEDURES ACT\n\nPub. L. 96-456, Oct. 15, 1980, 94 Stat. 2025, as amended by Pub. L. 100-690, title VII, §7020(g), Nov. 18, 1988, 102 Stat. 4396; Pub. L. 106-567, title VI, §607, Dec. 27, 2000, 114 Stat. 2855; Pub. L. 107-306, title VIII, §811(b)(3), Nov. 27, 2002, 116 Stat. 2423; Pub. L. 108-458, title I, §1071(f), Dec. 17, 2004, 118 Stat. 3691; Pub. L. 109-177, title V, §506(a)(8), Mar. 9, 2006, 120 Stat. 248; Pub. L. 111-16, §4, May 7, 2009, 123 Stat. 1608\n\n§1. Definitions\n(a) "Classified information", as used in this Act, means any information or material that has been determined by the United States Government pursuant to an Executive order, statute, or regulation, to require protection against unauthorized disclosure for reasons of national security and any restricted data, as defined in paragraph r. of section 11 of the Atomic Energy Act of 1954 (42 U.S.C. 2014(y)).\n\n(b) "National security", as used in this Act, means the national defense and foreign relations of the United States`
    );
  }
}

export default loreNero;
