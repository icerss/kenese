import "./highlight.css";
import { HIGHTLIGHT_CONTAINER } from "../dom";
import { log } from "../utils";

/**
 * 获取物品时显示的物品详情页
 */
export function showObjectGettingHighlight(krzObj) {
  return new Promise(function (resolve) {
    HIGHTLIGHT_CONTAINER.innerHTML = `
<div class="krz-object-highlight">
  <div class="krz-highlight-name">${krzObj.name}</div>
  <img class="krz-object-img-highlight" src="${krzObj.img}">
  <div class="krz-highlight-get-tip">GET!</div>
</div>`;
    HIGHTLIGHT_CONTAINER.style.display = "block";
    HIGHTLIGHT_CONTAINER.addEventListener("click", function () {
      HIGHTLIGHT_CONTAINER.style.display = "none";
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
  return new Promise(function (resolve) {
    HIGHTLIGHT_CONTAINER.innerHTML = `
<div class="krz-object-highlight">
  <div class="krz-highlight-name">${krzObj.name}</div>
  <img class="krz-object-img-highlight" src="${krzObj.img}">
  <div class="krz-item-highlight-tips">${krzObj.description}</div>
</div>`;
    HIGHTLIGHT_CONTAINER.style.display = "block";
    HIGHTLIGHT_CONTAINER.addEventListener("click", function () {
      HIGHTLIGHT_CONTAINER.style.display = "none";
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
  HIGHTLIGHT_CONTAINER.style.display = "none";
  HIGHTLIGHT_CONTAINER.innerHTML = "";
}
