import "./object.css";
import Promise from "promise-polyfill";
import {
  showObjectGettingHighlight,
  showItemHighlight,
  removeItemHighlight,
} from "../highlight/highlight";
import {
  addToItemBox,
  addToTouchListener,
  removeToTouchListener,
} from "../item/item";
import { log, nanoid } from "../utils";
import { screen } from "../screen/screen";
import { EventBus } from "../eventbus/eventbus";
import { OBJECT_CONTAINER } from "../dom";
import {
  ON_CLICK_TARGET_OBJECT,
  ON_HIDE_OBJECT_COVER,
} from "../eventbus/event";

/**
 * 游戏实例物品初始化
 */
class krzObject {
  constructor(config) {
    this.uid = nanoid(); // 唯一ID

    const div = document.createElement("div");
    const image = new Image();
    div.className = "krz-object";
    div.style.display = config.isShow ? "block" : "none";
    div.setAttribute("data-id", this.uid);
    image.className = "krz-object-img";
    image.src = config.img;
    if (config.width) image.width = config.width;
    if (config.height) image.height = config.height;
    div.style.left = config.x + "px";
    div.style.top = config.y + "px";
    div.appendChild(image);
    document.querySelector(".krz-object-container").appendChild(div);

    this.config = config;
    this.img = config.img;
    this.element = div;
    this.imageElement = image;
    this.isShow = config.isShow || true;
    this.isAnimating = false;
    this.name = config.name;
    this.description = config.description;
    this.isItem = config.isItem; // 是否可以被获取为物品

    this.isSelectAsItem = false; // 是否已经被选取作为物品

    screen.pushToObjects(this.uid);

    /**
     * 是否点击时显示高亮
     */
    if (config.description || this.isItem) {
      this.onclick(
        async function () {
          if (this.isItem) {
            await showObjectGettingHighlight(this);
            addToItemBox(this);
          }

          if (!config.description) return;

          if (typeof this.description === "object") {
            for (let str of this.description) {
              await screen.dialog(str);
            }
          } else {
            await screen.dialog(this.description);
          }
        }.bind(this)
      );
    }

    log("放置物品：", {
      name: this.name || "",
      uid: this.uid,
    });
  }

  /**
   * 显示物件
   */
  show() {
    log("显示物品", {
      name: this.name || "",
      uid: this.uid,
    });

    this.isShow = true;
    return (this.element.style.display = "block") && this;
  }

  /**
   * 隐藏物件
   */
  hide() {
    log("隐藏物品", {
      name: this.name || "",
      uid: this.uid,
    });

    this.isShow = false;
    return (this.element.style.display = "none") && this;
  }

  /**
   * 移除物件
   */
  remove() {
    log("移除物品", {
      name: this.name || "",
      uid: this.uid,
    });

    this.isShow = false;
    return this.element.remove() && this;
  }

  /**
   * 设置x坐标
   * @param {number} x x坐标
   */
  setX(x) {
    return (this.element.style.left = x + "px") && this;
  }

  /**
   * 设置y坐标
   * @param {number} y y坐标
   */
  setY(y) {
    return (this.element.style.top = y + "px") && this;
  }

  /**
   * 设置图片宽度
   * @param {number} w 宽度
   */
  setWidth(w) {
    return (this.imageElement.width = w) && this;
  }

  /**
   * 设置图片高度
   * @param {number} h 高度
   */
  setHeight(h) {
    return (this.imageElement.height = h) && this;
  }

  /**
   * 设置图片地址
   * @param {string} img 图片地址
   */
  setImage(img) {
    return (this.imageElement.src = img) && this;
  }

  /**
   * 移动到（动画）
   * @param {number} x x坐标
   * @param {number} y y坐标
   * @param {number} time 时间，单位秒
   */
  moveTo(x, y, time = 2) {
    log("物品动画开始", {
      name: this.name || "",
      uid: this.uid,
    });

    this.isAnimating = true;
    return new Promise(
      function (resolve) {
        this.element.style.transition = `ease-in-out ${time}s`;
        this.setX(x);
        this.setY(y);
        setTimeout(
          function () {
            this.element.style.transition = "unset";
            this.isAnimating = false;
            log("物品动画结束", {
              name: this.name || "",
              uid: this.uid,
            });

            resolve();
          }.bind(this),
          time * 1000
        );
      }.bind(this)
    );
  }

  /**
   * 传送到到（无动画）
   * @param {number} x x坐标
   * @param {number} y y坐标
   */
  goTo(x, y) {
    this.setX(x);
    this.setY(y);
    return this;
  }

  /**
   * 监听点击事件回调
   */
  onclick(func) {
    log("添加监听点击事件", {
      name: this.name || "",
      uid: this.uid,
    });
    return this.element.addEventListener("click", function (e) {
      if (screen.isAnimating) return; // 若正处于动画之中，则返回
      typeof func === "function" && func(e);
    });
  }

  /**
   * 点击时继续（Promise）
   */
  clicked() {
    return new Promise(
      function (resolve) {
        log("等待物品被点击", {
          name: this.name || "",
          uid: this.uid,
        });

        this.onclick(resolve);
      }.bind(this)
    );
  }

  /**
   * 触碰物品时继续（Promise）
   */
  touch(destObj) {
    return new Promise(
      async function (resolve) {
        log("等待物品执行拖动触碰", {
          name: this.name || "",
          uid: this.uid,
        });

        addToTouchListener(this, destObj);

        EventBus.$on(
          ON_CLICK_TARGET_OBJECT,
          function (data) {
            if (data.uid !== destObj.uid) return;
            removeToTouchListener(this);

            log("目标物体点击", {
              name: this.name || "",
              uid: this.uid,
            });
            resolve();
          }.bind(this)
        );
      }.bind(this)
    );
  }

  /**
   * 是否显示
   */
  isShow() {
    return this.isShow;
  }

  /**
   * 是否正在执行动画
   */
  isAnimating() {
    return this.isAnimating;
  }

  /**
   * 显示物品详情页
   */
  showInfoHighlight() {
    return showItemHighlight(this);
  }

  /**
   * 隐藏物品详情页
   */
  hideInfoHighlight() {
    return removeItemHighlight(this);
  }
}

export function placeObject(config) {
  return new krzObject(config);
}

/**
 * 物品强显示
 * @param {string} uid uid
 */
export function objectFadeToLight(uid) {
  showObjectCover();
  document
    .querySelector(`.krz-object[data-id='${uid}']`)
    .classList.add("krz-object-top");
}

/**
 * 是否已经显示黑幕
 */
export let isShowObjectCover = false;

/**
 * 显示黑幕
 */
export function showObjectCover(text) {
  if (isShowObjectCover || screen.isAnimating) return;
  screen.setStartAnimation();
  let div = document.createElement("div");
  div.className = "krz-object-cover";
  div.innerHTML = `<div class="krz-object-cover-close-tip">${text}</div>`;
  OBJECT_CONTAINER.insertBefore(div, document.querySelector(".krz-object"));
  div.classList.add("krz-animate-fadeIn-200");
  setTimeout(function () {
    div.classList.remove("krz-animate-fadeIn-200");
  }, 700);
  isShowObjectCover = true;

  div.onclick = hideObjectCover;
}

/**
 * 隐藏黑幕
 */
export function hideObjectCover() {
  const Cover = document.querySelector(".krz-object-cover");
  Cover.classList.add("krz-animate-fadeOut-400");
  EventBus.$emit(ON_HIDE_OBJECT_COVER);
  setTimeout(function () {
    Cover.remove();
    isShowObjectCover = false;
    // 取消全部元素置顶
    for (let element of document.querySelectorAll(".krz-object-top")) {
      element.classList.remove("krz-object-top");
      element.classList.remove("krz-object-pointer");
    }
    screen.setStopAnimation();
  }, 350);
}
