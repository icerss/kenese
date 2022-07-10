import { screen } from "../../renderer/Screen";

export const images = {
  bg: "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese/test/QQ%E5%9B%BE%E7%89%8720220710121312%20(1).png",
};
export async function Load() {
  await screen.showLoadingAnimation(" ");
  screen.toDefaultConfig();
  await screen.load(images);
  screen.background(images.bg);
  screen.closeItemBox();

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
