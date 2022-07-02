import "./item.css";
import { ITEM_BOX } from "../dom";
import { log } from "../utils";
import {
  hideObjectCover,
  isShowObjectCover,
  KrzObject,
  objectFadeToLight,
  showObjectCover,
} from "../Object";
import { EventBus } from "../EventBus";
import {
  ON_CLICK_TARGET_OBJECT,
  ON_HIDE_OBJECT_COVER,
} from "../EventBus/events";
import { createElement, m } from "million";

/**
 * 添加到物品栏
 */
export function addToItemBox(KrzObject: KrzObject): void {
  let v = m("div", { class: "krz-item", "data-id": KrzObject.uid }, [
    m("img", { class: "krz-item-img", src: KrzObject.img }),
  ]);
  let div = createElement(v);
  ITEM_BOX.appendChild(div);

  addItemClickEvent(div as HTMLElement);
  KrzObject.remove();

  log("添加物品到物品栏", {
    name: KrzObject.name,
    uid: KrzObject.uid,
  });
}

/**
 * 等待检测触碰事件
 * `物品栏 uid`: `要点击的 uid`
 */
let waitToListerTouch: {
  [key: string]: string;
} = {};

/**
 * 将物品添加等待触碰事件
 * @param {KrzObject} fromObj 待选择的物品
 * @param {KrzObject} toObj 目标物品
 */
export function addToTouchListener(fromObj: KrzObject, toObj: KrzObject): void {
  waitToListerTouch[fromObj.uid] = toObj.uid;

  log("添加物品到监听点击列表", {
    name: toObj.name,
    uid: toObj.uid,
  });
}

/**
 * 将物品等待触碰事件移除
 * @param {KrzObject} fromObj 待选择的物品
 */
export function removeToTouchListener(fromObj: KrzObject): void {
  delete waitToListerTouch[fromObj.uid];
}

/**
 * 添加物品栏物品点击事件
 * @param {HTMLElement} element 物品栏 html
 */
function addItemClickEvent(element: HTMLElement): void {
  const uid = element.getAttribute("data-id") as string;
  element.onclick = () => {
    if (waitToListerTouch[uid]) {
      showObjectCover("请选择目标物品，或点击空白处关闭");
      objectFadeToLight(waitToListerTouch[uid]);
      let targetElement = document.querySelector(
        `.krz-object[data-id='${waitToListerTouch[uid]}']`
      ) as HTMLElement;
      targetElement.classList.add("krz-object-pointer");
      let onTargetElementClick = () => {
        if (!isShowObjectCover) return;
        EventBus.$emit(ON_CLICK_TARGET_OBJECT, {
          uid: waitToListerTouch[uid],
        });
        targetElement.removeEventListener("click", onTargetElementClick);
        hideObjectCover();
      };
      targetElement.addEventListener("click", onTargetElementClick);
      EventBus.$on(ON_HIDE_OBJECT_COVER, () => {
        targetElement.removeEventListener("click", onTargetElementClick);
      });
    } else {
      showObjectCover("暂无可操作物品，点击空白处关闭");
    }
  };
}
