//----------------------
//  imports
//----------------------
import Canvas from "canvas";

//----------------------
//  config
//----------------------
const background = "https://cdn.discordapp.com/attachments/818031871215796245/1250078325729267785/collei_library.png?ex=6669a1aa&is=6668502a&hm=dc7a6a0f0a750795d2aa0c15c2ed8c5e77e974227cf77e2a96a4f0fb5275ab4c&";

const dim = {
  height: 670,
  width: 1200,
  margin: 50,
};

const av = {
  size: 256,
  x: 480,
  y: 170,
};

//----------------------
//  main
//----------------------
const generateImage = async (member) => {
  let username = member.user.username;
  let avatarURL = member.user.displayAvatarURL({
    extension: "png",
    dynamic: false,
    size: av.size,
  });

  const canvas = Canvas.createCanvas(dim.width, dim.height);
  const ctx = canvas.getContext("2d");

  const backimg = await Canvas.loadImage(background);
  ctx.drawImage(backimg, 0, 0);

  ctx.fillStyle = "rgba(0,0,0,0.69)";
  ctx.fillRect(
    dim.margin,
    dim.margin,
    dim.width - 2 * dim.margin,
    dim.height - 2 * dim.margin
  );

  const avimg = await Canvas.loadImage(avatarURL);
  ctx.save();

  ctx.beginPath();
  ctx.arc(
    av.x + av.size / 2,
    av.y + av.size / 2,
    av.size / 2,
    0,
    Math.PI * 2,
    true
  );
  ctx.closePath();
  ctx.clip();

  ctx.drawImage(avimg, av.x, av.y);
  ctx.restore();

  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  ctx.font = "50px Sans";
  ctx.fillText("Welcome to Sumeru Akademiya | TGP,", dim.width / 2, dim.margin + 70);

  ctx.font = "60px Sans";
  ctx.fillText(
    username,
    dim.width / 2,
    dim.height - dim.margin - 125
  );

  ctx.font = "40px Sans";
  ctx.fillText(
    "May Kusanali grant you wisdom.",
    dim.width / 2,
    dim.height - dim.margin - 55
  );

  const attachment = canvas.toBuffer();
  return attachment;
};

//----------------------
//  exports
//----------------------
export default generateImage;
