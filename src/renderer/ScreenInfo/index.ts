import "./screenInfo.css";
import _Promise from "Promise-polyfill";
import { SCREEN_INFO_CONTAINER } from "../dom";
import { printSingleText } from "../Dialog";
import { log } from "../utils";
import { screen } from "../Screen";
import { m, render } from "million";

/**
 * 添加全屏幕字幕
 * @param text {string} 字幕文本
 */
export async function addFullscreenInfo(text: string): Promise<void> {
  log("开始展示全屏幕文字", { text });
  screen.setStartAnimation();
  return new _Promise(async (resolve: any) => {
    let v = m("div", { class: "krz-screen-info-words" }, [
      m("div", { class: "krz-screen-info-words-print" }, []),
    ]);
    render(SCREEN_INFO_CONTAINER, v);
    SCREEN_INFO_CONTAINER.style.display = "flex";
    text = text.replace(/(，|。|,|\\n)/gi, "$1\n");
    let texts = text.split("\n");
    for (let sentence of texts) {
      let box = document.createElement("div");
      box.className = "krz-screen-info-text";
      (
        document.querySelector(".krz-screen-info-words-print") as HTMLElement
      ).appendChild(box);
      let sentences = sentence.split("");
      for (let item of sentences) {
        await printSingleText(box, item, {
          waitTime: 50,
        });
        if (
          (
            document.querySelector(
              ".krz-screen-info-words-print"
            ) as HTMLElement
          ).clientHeight > SCREEN_INFO_CONTAINER.clientHeight
        ) {
          (
            document.querySelector(
              ".krz-screen-info-text:first-child"
            ) as HTMLElement
          ).remove();
        }
      }
    }
    (document.querySelector(".krz-screen-info") as HTMLElement).onclick =
      () => {
        (
          document.querySelector(".krz-screen-info") as HTMLElement
        ).classList.add("krz-animate-fadeOut");
        setTimeout(() => {
          SCREEN_INFO_CONTAINER.style.display = "none";
          (
            document.querySelector(".krz-screen-info") as HTMLElement
          ).classList.remove("krz-animate-fadeOut");
          log("结束展示全屏幕文字");
          screen.setStopAnimation();
          resolve();
        }, 500);
      };
  });
}
