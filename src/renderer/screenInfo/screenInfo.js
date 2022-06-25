import "./screenInfo.css";
import Promise from "promise-polyfill";
import { SCREEN_INFO_CONTAINER } from "../dom";
import { printSingleText } from "../dialog/dialog";
import { log } from "../utils";
import { screen } from "../screen/screen";
import { m, render } from "million";

/**
 * 添加全屏幕字幕
 */
export async function addFullscreenInfo(text) {
  log("开始展示全屏幕文字", { text });
  screen.setStartAnimation();
  return new Promise(async function (resolve) {
    let v = m("div", { class: "krz-screen-info-words" }, [
      m("div", { class: "krz-screen-info-words-print" }, []),
    ]);
    render(SCREEN_INFO_CONTAINER, v);
    SCREEN_INFO_CONTAINER.style.display = "flex";
    text = text.replace(/(，|。|,|\\n)/gi, "$1\n");
    text = text.split("\n");
    for (let sentence of text) {
      let box = document.createElement("div");
      box.className = "krz-screen-info-text";
      document.querySelector(".krz-screen-info-words-print").appendChild(box);
      sentence = sentence.split("");
      for (let item of sentence) {
        await printSingleText(box, item, {
          waitTime: 50,
        });
        if (
          document.querySelector(".krz-screen-info-words-print").clientHeight >
          SCREEN_INFO_CONTAINER.clientHeight
        ) {
          document.querySelector(".krz-screen-info-text:first-child").remove();
        }
      }
    }
    document.querySelector(".krz-screen-info").onclick = function () {
      document
        .querySelector(".krz-screen-info")
        .classList.add("krz-animate-fadeOut");
      setTimeout(function () {
        SCREEN_INFO_CONTAINER.style.display = "none";
        document
          .querySelector(".krz-screen-info")
          .classList.remove("krz-animate-fadeOut");
        log("结束展示全屏幕文字");
        screen.setStopAnimation();
        resolve();
      }, 500);
    };
  });
}
