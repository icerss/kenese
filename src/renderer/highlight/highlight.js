import "./highlight.css";
import { HIGHLIGHT_CONTAINER } from "../dom";
import { log } from "../utils";
import { screen } from "../screen/screen";
import Promise from "promise-polyfill";
import { Flags, m, render } from "million";
import { emptyImage } from "../init";

/**
 * 获取物品时显示的物品详情页
 */
export function showObjectGettingHighlight(krzObj) {
  screen.setStartAnimation();
  return new Promise(function (resolve) {
    let v = m("div", { class: "krz-object-highlight" }, [
      m("div", { class: "krz-highlight-name" }, [krzObj.name]),
      m("img", {
        class: "krz-object-img-highlight",
        src: krzObj.img,
        key: krzObj.img,
      }),
      m("div", { class: "krz-highlight-get-tip" }, ["GET!"]),
      m("div", { class: "krz-highlight-close-tip" }, ["点击空白处以继续"]),
    ]);
    render(HIGHLIGHT_CONTAINER, v);
    HIGHLIGHT_CONTAINER.style.display = "block";
    HIGHLIGHT_CONTAINER.addEventListener("click", function () {
      HIGHLIGHT_CONTAINER.style.display = "none";
      // 设置为空白图片
      document.querySelector(".krz-object-img-highlight").src = emptyImage;
      screen.setStopAnimation();
      resolve();
    });

    log("展示物品高亮", {
      name: krzObj.name || "",
      uid: krzObj.uid,
    });
  });
}

/**
 * 显示物品详情页
 */
export function showItemHighlight(krzObj) {
  screen.setStartAnimation();
  return new Promise(function (resolve) {
    let v = m("div", { class: "krz-object-highlight" }, [
      m(
        "div",
        { class: "krz-highlight-name" },
        [krzObj.name],
        Flags.ELEMENT_TEXT_CHILDREN
      ),
      m("img", { class: "krz-object-img-highlight", src: krzObj.img }),
      m(
        "div",
        { class: "krz-item-highlight-tips" },
        [krzObj.description],
        Flags.ELEMENT_TEXT_CHILDREN
      ),
    ]);
    render(HIGHLIGHT_CONTAINER, v);
    HIGHLIGHT_CONTAINER.style.display = "block";
    HIGHLIGHT_CONTAINER.addEventListener("click", function () {
      HIGHLIGHT_CONTAINER.style.display = "none";
      screen.setStopAnimation();
      resolve();
    });

    log("展示物品高亮", {
      name: krzObj.name || "",
      uid: krzObj.uid,
    });
  });
}

/**
 * 关闭物品详情页
 */
export function removeItemHighlight() {
  HIGHLIGHT_CONTAINER.style.display = "none";
  HIGHLIGHT_CONTAINER.innerHTML = "";
}
