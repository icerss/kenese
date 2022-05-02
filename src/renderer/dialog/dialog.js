import "./dialog.css";
import { DIALOG_CONTAINER } from "../dom";
import { log } from "../utils";

/**
 * 人物对话
 */
export function showDialog(text) {
  log("显示人物对话", { text });
  return new Promise(async function (resolve) {
    DIALOG_CONTAINER.innerHTML = `
<div class="krz-dialog-model">
    <div class="krz-dialog-words-group">
        <div class="krz-dialog-text"></div>
    </div>
    <div class="krz-dialog-next-icon" style="display: none;"></div>
</div>`;
    DIALOG_CONTAINER.style.display = "flex";
    let isRed = false;
    if (/<red>(.*?)<\/red>/.test(text)) {
      isRed = true;
      text = text.replace(/<red>(.*?)<\/red>/g, "$1");
    }
    text = text.split("");
    let box = document.querySelector(".krz-dialog-text");
    if (isRed) box.style.color = "red";
    for (let item of text) {
      await showFullSubtitleText(box, item, {
        waitTime: 30,
        isAnimate: false,
      });
    }
    setTimeout(function () {
      document.querySelector(".krz-dialog-next-icon").style.display = "block";
    }, 100);
    document
      .querySelector(".krz-dialog-model")
      .addEventListener("click", function () {
        setTimeout(function () {
          document.querySelector(".krz-dialog-model").remove();
          DIALOG_CONTAINER.style.display = "none";
          resolve(void 0);
        }, 100);
      });
  });
}

/**
 * 显示单字符打字机动画效果
 */
export function showFullSubtitleText(
  el,
  text = "",
  config = {
    waitTime: 20,
    isAnimate: true,
  }
) {
  let { waitTime, isAnimate } = config;
  return new Promise(function (resolve) {
    let div = document.createElement("span");
    div.textContent = text;
    isAnimate && (div.className = "krz-animate-fadeIn");
    el.appendChild(div);
    setTimeout(resolve, waitTime);
  });
}

window.showDialog = showDialog;
