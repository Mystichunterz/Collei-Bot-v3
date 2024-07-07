import Response from "../../classes/Response.js";

class loreManitou extends Response {
  aliases = ["manitou lore"];
  cooldown = 5 * 1000;
  async run(message) {
    message.reply(
      `When I was born, when I had my consciousness, I already had a body. So did my consciousness come first or my body come first? Of course is my body. When I grew up, I learned how to walk by watching the grow-up walk, and to try and fall a lot of times, fall is a bad thing, but from the fall I can take my lesson and try again and avoid the same mistake, it takes a year for me to learn how to walk with countless fall, but with my parent support and with each fall I learn a new little thing, each little thing develops me a little, and each little develop is sum up after one year when I finally can walk on my feet. Why I saying this? Because that’s an example of dialectic materialism, of philosophy. Philosophy is a worldview, a method of perception, and a way of thinking of humanity. How you thinking is how you use philosophy, idealist or materialist, metaphysical or dialectical, is depend on your view.`
    );
  }
}

export default loreManitou;
