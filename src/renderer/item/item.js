import "./item.css";
import { APP, ITEM_BOX } from "../dom";
import { screen } from "../screen/screen";
import { log } from "../utils";
import interact from "interactjs";

/**
 * 监听拖动碰撞目标的列表
 * { $dragObj: $destObj }
 */
let dragDestObjList = {};

// /**
//  * 添加到监听列表
//  * @param {string} dragObj 要拖动的元素
//  * @param {string} destObj 目标监测碰撞的元素
//  * @param {function} func 回调
//  */
// export function addDragToListener(dragObj, destObj, func) {

//   log("添加物品到监听碰撞列表", {
//     name: dragObj.name,
//     uid: dragObj.uid,
//   });
// }

/**
 * 添加到物品栏
 */
export function addToItemBox(krzObj) {
  let div = document.createElement("div");
  div.className = "krz-item";
  div.setAttribute("data-id", krzObj.uid);
  let image = new Image();
  image.src = krzObj.img;
  image.className = "krz-item-img";
  div.appendChild(image);
  ITEM_BOX.appendChild(div);
  addDragEvent(div);
  krzObj.remove();

  log("添加物品到物品栏", {
    name: krzObj.name,
    uid: krzObj.uid,
  });
}

/**
 * 物品栏物品信息
 */
let itemList = {};

/**
 * 物品栏物品数量
 */
let itemCount = 0;

/**
 * 待检测碰撞的元素
 */

/**
 * 添加拖拽事件
 * @param {HTMLElement} element 目标
 */
function addDragEvent(element) {
  const uid = element.getAttribute("data-id");
  const getNormalPosition = function () {
    return {
      x:
        document.querySelector(`.krz-item[data-id='${uid}']`).offsetLeft -
        getPreviousItemWidth(itemList[uid].n),
      y: document.querySelector(`.krz-item[data-id='${uid}']`).offsetTop,
    };
  };
  itemCount++;
  itemList[uid] = {
    n: itemCount,
  };

  let position = getNormalPosition();
  interact(`.krz-item[data-id='${uid}']`).draggable({
    allowFrom: ".krz-item-box",
    listeners: {
      start() {
        log("开始拖动", {
          name: "",
          uid: uid,
        });
      },
      move(event) {
        position.x += event.dx / window["_krz_game_scale"];
        position.y += event.dy / window["_krz_game_scale"];
        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;

        const dragLeft = position.x;
        const dragTop = position.y;
      },
      end(event) {
        position = getNormalPosition();
        event.target.style.transform = "";

        log("结束拖动", {
          name: "",
          uid: uid,
        });
      },
    },
  });
}

/**
 * 获取前面几个物品的总宽度
 * @param {number} n 第几个物品
 */
function getPreviousItemWidth(n) {
  let items = document.querySelectorAll(".krz-item");
  let width = 0;
  for (let i = 0; i < items.length && i < n; i++) {
    let element = items[i];
    width += element.offsetWidth;
  }
  return width;
}

// /**
//  * 添加拖动监听
//  * @param {any} krzObj 要拖动的元素
//  * @param {any}
//  */
// export function addDragEvent(krzObj) {
//   // 鼠标拖动
//   let isStartDrag = false;
//   let mouseX = 0;
//   let mouseY = 0;
//   let offsetLeft = 0;
//   let offsetTop = 0;
//   function onmousedown(e) {
//     e.preventDefault();

//     APP.addEventListener("mousemove", onmousemove);
//     APP.addEventListener("mouseup", onmouseup);

//     mouseX = e.clientX || e.changedTouches[0].pageX;
//     mouseY = e.clientY || e.changedTouches[0].pageY;
//     offsetLeft = krzObj.offsetLeft;
//     offsetTop = krzObj.offsetTop;
//     isStartDrag = true;

//     log("开始拖动物品", {
//       name: "",
//       uid: krzObj.getAttribute("data-id"),
//     });
//   }

//   function onmousemove(e) {
//     e.preventDefault();
//     if (!isStartDrag || screen.isAnimating) return;
//     krzObj.classList.add("krz-item-drag");
//     let nowX = e.clientX || e.changedTouches[0].pageX;
//     let nowY = e.clientY || e.changedTouches[0].pageY;
//     let nowOffsetLeft = nowX - (mouseX - offsetLeft);
//     let nowOffsetTop = nowY - (mouseY - offsetTop);
//     let l = nowOffsetLeft / screen.scale;
//     let t = nowOffsetTop / screen.scale;
//     krzObj.style.left = l + "px";
//     krzObj.style.top = t + "px";

//     // ==========
//     for (let uid in dragDestObjList) {
//       // 貌似有点 bug，但是可以用[doge]
//       let destObj = dragDestObjList[uid].obj;
//       let dragObj = krzObj;
//       let callbackFunc = dragDestObjList[uid].func;

//       if (dragObj.getAttribute("data-id") !== uid) {
//         // 若不是待检测元素，跳过
//         continue;
//       }

//       let destElement = destObj.element; // 目标元素
//       let dragElement = dragObj; // 拖动的元素
//       let itemboxElement = ITEM_BOX;

//       let dragLeft = itemboxElement.offsetLeft + dragElement.offsetLeft;
//       let destLeft = destElement.offsetLeft;
//       let destRight = destElement.offsetLeft + destElement.offsetWidth;

//       let dragTop = nowOffsetTop;
//       let destTop = destElement.offsetTop;
//       let destBottom = destElement.offsetTop + destElement.clientHeight;

//       // 比较部分
//       let l = dragLeft + dragElement.clientWidth > destLeft; // 左
//       let r = dragLeft < destRight; // 右
//       let t = dragTop + dragElement.clientHeight > destTop; // 上
//       let b = dragTop + dragElement.clientHeight < destBottom; // 下

//       if (l && r && t && b) {
//         setTimeout(function () {
//           log("触碰到匹配的物品", {
//             name: destObj.name || "",
//             uid: destObj.uid,
//           });
//           typeof callbackFunc === "function" && callbackFunc();
//         }, 1);
//       }
//     }
//     // ==========
//   }

//   function onmouseup(e) {
//     e.preventDefault();
//     if (!isStartDrag) return;
//     krzObj.classList.remove("krz-item-drag");
//     krzObj.removeAttribute("style");
//     isStartDrag = false;

//     log("停止拖动物品", {
//       name: "",
//       uid: krzObj.getAttribute("data-id"),
//     });

//     removeEventListener();
//   }

//   function removeEventListener() {
//     APP.removeEventListener("mousemove", onmousemove);
//     APP.removeEventListener("mouseup", onmouseup);
//   }

//   krzObj.addEventListener("mousedown", onmousedown);
// }
