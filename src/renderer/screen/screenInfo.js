import "./screenInfo.css";
import { SCREEN_INFO_CONTAINER } from "../dom";
import { showFullSubtitleText } from "../dialog/dialog";
import { log } from "../utils";

/**
 * 添加全屏幕字幕
 */
export async function addFullscreenInfo(text) {
  log("开始展示全屏幕文字", { text });
  return new Promise(async function (resolve) {
    SCREEN_INFO_CONTAINER.innerHTML = `
  <div class="krz-screen-info-words">
      <div class="krz-screen-info-words-print"></div>
  </div>`;
    SCREEN_INFO_CONTAINER.style.display = "flex";
    text = text.replace(/(，|。|\\n)/gi, "$1\n");
    text = text.split("\n");
    for (let sentence of text) {
      let box = document.createElement("div");
      box.className = "krz-screen-info-text";
      document.querySelector(".krz-screen-info-words-print").appendChild(box);
      sentence = sentence.split("");
      for (let item of sentence) {
        await showFullSubtitleText(box, item, {
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
    document
      .querySelector(".krz-screen-info")
      .addEventListener("click", function () {
        document
          .querySelector(".krz-screen-info")
          .classList.add("krz-animate-fadeOut");
        setTimeout(function () {
          SCREEN_INFO_CONTAINER.style.display = "none";
          document
            .querySelector(".krz-screen-info")
            .classList.remove("krz-animate-fadeOut");
          log("结束展示全屏幕文字");
          resolve();
        }, 500);
      });
  });
}
