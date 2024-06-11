class randomisedGreeting {
  static sendGreeting(member, channelId) {
    let memberRoulette = Math.floor(Math.random() * 10) + 1;
    let message = "";
    if (memberRoulette == 9) {
      message = `Okay kids, we've got company. Pretend you all get along.`;
    } else if (memberRoulette == 8) {
      message = `https://tenor.com/view/mihoyo-genshin-genshin-impact-scaramouche-cross-arms-gif-23298841`;
    }

    if (message) {
      member.guild.channels.cache.get(channelId).send(message);
    }
  }
}

export default randomisedGreeting;
