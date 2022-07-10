import { playMusic } from "../../renderer/Audio";
import { screen } from "../../renderer/Screen";

const images = {
  bg: "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese/test/QQ%E5%9B%BE%E7%89%8720220710121312%20(1).png",
};

const music = {
  start:
    "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-Home/%E5%A4%B1%E8%90%BD.m4a",
};

export async function Load() {
  await screen.showLoadingAnimation(" ");
  screen.toDefaultConfig();
  await screen.load(images);
  await screen.load(music);
  screen.background(images.bg);
  screen.closeItemBox();

  await playMusic.play(music.start);

  let startbutton = screen.placeText({
    x: 125,
    y: 68,
    text: "开始游戏",
    fontSize: "5rem",
    fontColor: "white",
  });
  screen.placeText({
    x: 200,
    y: 183,
    text: "关于",
    fontSize: "5rem",
    fontColor: "white",
  });

  await screen.hideLoadingAnimation();

  return {
    startbutton,
  };
}
