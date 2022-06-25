import Promise from "promise-polyfill";
import "./dialog.css";
import { DIALOG_CONTAINER } from "../dom";
import { log } from "../utils";
import { screen } from "../screen/screen";
import { m, patch, render, style } from "million";

/**
 * 人物对话
 */
export function showDialog(text) {
  log("显示人物对话", { text });
  screen.setStartAnimation();
  if (document.querySelector(".krz-dialog-words-group")) {
    document.querySelector(".krz-dialog-text").innerHTML = "";
  }
  return new Promise(async function (resolve) {
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
    text = text.split("");
    let box = document.querySelector(".krz-dialog-text");
    if (isRed) {
      box.classList.add("krz-dialog-text-red");
    } else {
      box.classList.remove("krz-dialog-text-red");
    }
    for (let item of text) {
      await printSingleText(box, item, {
        waitTime: 30,
        isAnimate: false,
      });
    }
    setTimeout(function () {
      document.querySelector(".krz-dialog-next-icon").style.display = "block";
      document
        .querySelector(".krz-dialog-next-icon")
        .classList.add("krz-animate-flicker");
    }, 100);
    document.querySelector(".krz-dialog-model").onclick = function () {
      setTimeout(function () {
        DIALOG_CONTAINER.style.display = "none";
        screen.setStopAnimation();
        document.querySelector(".krz-dialog-model").onclick = null;
        document.querySelector(".krz-dialog-next-icon").style.display = "none";
        resolve();
      }, 100);
    };
  });
}

/**
 * 显示单字符打字机动画效果
 */
export function printSingleText(
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
