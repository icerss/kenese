import { OBJECT_CONTAINER } from "../../renderer/dom";
import { screen } from "../../renderer/Screen";

const images = {
  bg: "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese/test/QQ%E5%9B%BE%E7%89%8720220710154056%20(1).jpg",
  S0: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-Menu/S0.png",
  S1: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-Menu/S1.png",
};

export async function Load() {
  await screen.showLoadingAnimation();
  screen.toDefaultConfig();
  await screen.load(images);
  await screen.background(images.bg);
  screen.closeItemBox();

  OBJECT_CONTAINER.style.overflowX = "auto";

  const menu = screen.place({
    x: 680,
    y: -74,
    buttonText: "目录",
    buttonFontSize: "15rem",
    buttonColor: "white",
    isShow: true,
  });
  menu.element.style.position = "fixed";

  const S0 = screen.place({
    x: 150,
    y: 200,
    img: images.S0,
    height: 700,
    isShow: true,
  });

  const S1 = screen.place({
    x: 700,
    y: 200,
    img: images.S1,
    height: 700,
    isShow: true,
  });

  const S2 = screen.place({
    x: 1250,
    y: 200,
    img: images.S1,
    height: 700,
    isShow: true,
  });

  const S3 = screen.place({
    x: 1800,
    y: 200,
    img: images.S1,
    height: 700,
    isShow: true,
  });

  const S4 = screen.place({
    x: 2350,
    y: 200,
    img: images.S1,
    height: 700,
    isShow: true,
  });

  await screen.hideLoadingAnimation();

  return {
    S0,
    S1,
  };
}
