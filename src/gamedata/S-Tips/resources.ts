import { screen } from "../../renderer/Screen";
import { $ } from "./i18n";

export const images = {
  earphone:
    "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-Tips/earphone-white.png",
};
export async function Load() {
  await screen.showLoadingAnimation(" ");
  screen.toDefaultConfig();
  await screen.load(images);
  screen.closeItemBox();

  let continuButton = screen.placeText({
    x: 0,
    y: 0,
    text: $.t("CONTINUE"),
    fontSize: "3rem",
    fontColor: "white",
  });

  let tips = screen.placeText({
    x: 0,
    y: 0,
    text: $.t("TIPS_1"),
    fontSize: "2rem",
    fontColor: "white",
  });

  let earphone = screen.place({
    x: 0,
    y: 0,
    img: images.earphone,
    isShow: true,
  });

  tips.element.style.display = "flex";
  tips.element.style.justifyContent = "center";
  tips.element.style.position = "relative";
  tips.element.style.top = "700px";

  continuButton.element.style.display = "flex";
  continuButton.element.style.justifyContent = "center";
  continuButton.element.style.position = "relative";
  continuButton.element.style.top = "900px";

  earphone.element.style.display = "flex";
  earphone.element.style.justifyContent = "center";
  earphone.element.style.position = "relative";
  earphone.element.style.top = "200px";

  await screen.hideLoadingAnimation();

  return {
    continuButton,
  };
}
