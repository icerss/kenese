import "./dialog.css";
import _Promise from "Promise-polyfill";
import { DIALOG_CONTAINER } from "../dom";
import { log } from "../utils";
import { screen } from "../Screen";
import { m, render, style } from "million";

/**
 * 人物对话
 * @param text {string} 对话文字
 */
export function showDialog(text: string): Promise<void> {
  log("显示人物对话", { text });
  screen.setStartAnimation();
  if (document.querySelector(".krz-dialog-words-group")) {
    (document.querySelector(".krz-dialog-text") as HTMLElement).innerHTML = "";
  }
  return new _Promise(async (resolve: any) => {
    let textVNode = m("div", { class: "krz-dialog-text", key: text }, []);
    let v = m("div", { class: "krz-dialog-model" }, [
      m("div", { class: "krz-dialog-words-group" }, [textVNode]),
      m(
        "div",
        { class: "krz-dialog-next-icon", style: style({ display: "none" }) },
        []
      ),
    ]);
    render(DIALOG_CONTAINER, v);
    DIALOG_CONTAINER.style.display = "flex";
    let isRed = false;
    if (/<red>(.*?)<\/red>/.test(text)) {
      isRed = true;
      text = text.replace(/<red>(.*?)<\/red>/g, "$1");
    }
    let texts = text.split("");
    let box = document.querySelector(".krz-dialog-text") as HTMLElement;
    if (isRed) {
      box.classList.add("krz-dialog-text-red");
    } else {
      box.classList.remove("krz-dialog-text-red");
    }
    for (let item of texts) {
      await printSingleText(box, item, {
        waitTime: 30,
        isAnimate: false,
      });
    }
    setTimeout(() => {
      (
        document.querySelector(".krz-dialog-next-icon") as HTMLElement
      ).style.display = "block";
      (
        document.querySelector(".krz-dialog-next-icon") as HTMLElement
      ).classList.add("krz-animate-flicker");
    }, 100);
    (document.querySelector(".krz-dialog-model") as HTMLElement).onclick =
      () => {
        setTimeout(() => {
          DIALOG_CONTAINER.style.display = "none";
          screen.setStopAnimation();
          (document.querySelector(".krz-dialog-model") as HTMLElement).onclick =
            null;
          (
            document.querySelector(".krz-dialog-next-icon") as HTMLElement
          ).style.display = "none";
          resolve();
        }, 100);
      };
  });
}

/**
 * 显示单字符打字机动画效果
 * @param el {HTMLElement} 打字机容器
 * @param text {string} 字符
 * @param config {object} 选项
 */
export function printSingleText(
  el: HTMLElement,
  text: string = "",
  config?: {
    waitTime?: number;
    isAnimate?: boolean;
  }
): Promise<void> {
  let { waitTime = 20, isAnimate = true } = config || {};
  return new _Promise((resolve) => {
    let div = document.createElement("span");
    div.textContent = text;
    isAnimate && (div.className = "krz-animate-fadeIn");
    el.appendChild(div);
    setTimeout(resolve, waitTime);
  });
}
