import Response from "../../classes/Response.js";

class loreNoodle extends Response {
  aliases = ["noodle lore"];
  cooldown = 5 * 1000;
  accessLevel = 10;
  async run(message) {
    message.reply(
      `<:1yaefish:1001425625610981446> Hmmmmm\n\nNoodle started out as a small wriggly noodle. He believed he could get stronger, and then he ate some pasta sauce. He is still small and wriggly but for some reason he can use a computer and draw godlike. Please nerf the noodle.`
    );
  }
}

export default loreNoodle;
