import "./highlight.css";
import _Promise from "promise-polyfill";
import { HIGHLIGHT_CONTAINER } from "../dom";
import { log } from "../utils";
import { screen } from "../Screen";
import { Flags, m, render } from "million";
import { emptyImage } from "../init";
import { KrzObject } from "../Object";

/**
 * 获取物品时显示的物品详情页
 */
export function showObjectGettingHighlight(krzObj: KrzObject): Promise<void> {
  screen.setStartAnimation();
  return new _Promise((resolve: any) => {
    let v = m("div", { class: "krz-object-highlight" }, [
      m("div", { class: "krz-highlight-name" }, [krzObj.name || m("span")]),
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
    HIGHLIGHT_CONTAINER.addEventListener("click", () => {
      HIGHLIGHT_CONTAINER.style.display = "none";
      // 设置为空白图片
      (
        document.querySelector(".krz-object-img-highlight") as HTMLImageElement
      ).src = emptyImage;
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
export function showItemHighlight(krzObj: KrzObject): Promise<void> {
  screen.setStartAnimation();
  return new _Promise((resolve: any) => {
    let v = m("div", { class: "krz-object-highlight" }, [
      m(
        "div",
        { class: "krz-highlight-name" },
        [(krzObj.name && krzObj.name) || m("span")],
        Flags.ELEMENT_TEXT_CHILDREN
      ),
      m("img", { class: "krz-object-img-highlight", src: krzObj.img }),
      m(
        "div",
        { class: "krz-item-highlight-tips" },
        [(krzObj.description && krzObj.description[0]) || m("span")],
        Flags.ELEMENT_TEXT_CHILDREN
      ),
    ]);
    render(HIGHLIGHT_CONTAINER, v);
    HIGHLIGHT_CONTAINER.style.display = "block";
    HIGHLIGHT_CONTAINER.addEventListener("click", () => {
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
export function removeItemHighlight(): void {
  HIGHLIGHT_CONTAINER.style.display = "none";
  HIGHLIGHT_CONTAINER.innerHTML = "";
}
