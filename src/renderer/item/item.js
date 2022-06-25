import "./item.css";
import { ITEM_BOX } from "../dom";
import { log } from "../utils";
import {
  hideObjectCover,
  isShowObjectCover,
  objectFadeToLight,
  showObjectCover,
} from "../object/object";
import { EventBus } from "../eventBus/eventBus";
import {
  ON_CLICK_TARGET_OBJECT,
  ON_HIDE_OBJECT_COVER,
} from "../eventBus/event";
import { createElement, m } from "million";

/**
 * 添加到物品栏
 */
export function addToItemBox(krzObj) {
  let v = m("div", { class: "krz-item", "data-id": krzObj.uid }, [
    m("img", { class: "krz-item-img", src: krzObj.img }),
  ]);
  let div = createElement(v);
  ITEM_BOX.appendChild(div);

  addItemClickEvent(div);
  krzObj.remove();

  log("添加物品到物品栏", {
    name: krzObj.name,
    uid: krzObj.uid,
  });
}

/**
 * 等待检测触碰事件
 * `物品栏 uid`: `要点击的 uid`
 */
let watiToListerTouch = {};

/**
 * 将物品添加等待触碰事件
 * @param {krzObj} fromObj 待选择的物品
 * @param {krzObj} toObj 目标物品
 */
export function addToTouchListener(fromObj, toObj) {
  watiToListerTouch[fromObj.uid] = toObj.uid;

  log("添加物品到监听点击列表", {
    name: toObj.name,
    uid: toObj.uid,
  });
}

/**
 * 将物品等待触碰事件移除
 * @param {krzObj} fromObj 待选择的物品
 */
export function removeToTouchListener(fromObj) {
  delete watiToListerTouch[fromObj.uid];
}

/**
 * 添加物品栏物品点击事件
 * @param {HTMLElement} element 物品栏 html
 */
function addItemClickEvent(element) {
  const uid = element.getAttribute("data-id");
  element.onclick = function () {
    if (watiToListerTouch[uid]) {
      showObjectCover("请选择目标物品，或点击空白处关闭");
      objectFadeToLight(watiToListerTouch[uid]);
      let targetElement = document.querySelector(
        `.krz-object[data-id='${watiToListerTouch[uid]}']`
      );
      targetElement.classList.add("krz-object-pointer");
      let onTargetElementClick = function () {
        if (!isShowObjectCover) return;
        EventBus.$emit(ON_CLICK_TARGET_OBJECT, {
          uid: watiToListerTouch[uid],
        });
        targetElement.removeEventListener("click", onTargetElementClick);
        hideObjectCover();
      };
      targetElement.addEventListener("click", onTargetElementClick);
      EventBus.$on(ON_HIDE_OBJECT_COVER, function () {
        targetElement.removeEventListener("click", onTargetElementClick);
      });
    } else {
      showObjectCover("暂无可操作物品，点击空白处关闭");
    }
  };
}
