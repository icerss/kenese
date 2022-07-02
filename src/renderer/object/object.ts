import "./object.css";
import _Promise from "Promise-polyfill";
import {
  removeItemHighlight,
  showItemHighlight,
  showObjectGettingHighlight,
} from "../highlight/highlight";
import {
  addToItemBox,
  addToTouchListener,
  removeToTouchListener,
} from "../item/item";
import { log, nanoid } from "../utils";
import { screen } from "../screen/screen";
import { EventBus } from "../eventBus/eventBus";
import { OBJECT_CONTAINER } from "../dom";
import {
  ON_CLICK_TARGET_OBJECT,
  ON_HIDE_OBJECT_COVER,
} from "../eventBus/event";
import { className, createElement, Flags, m, style, VNode } from "million";

export interface KrzObjectConfig {
  /**
   * 物件 X 坐标
   */
  x: number;
  /**
   * 物件 Y 坐标
   */
  y: number;
  /**
   * 物件图片地址
   */
  img: string;
  /**
   * 物件宽度
   */
  width?: number;
  /**
   * 物件高度
   */
  height?: number;
  /**
   * 物件名称
   */
  name?: string;
  /**
   * 物件描述
   */
  description?: string | Array<string>;
  /**
   * 物件是否显示
   */
  isShow?: boolean;
  /**
   * 物件是否位物品（是否可以被选取到物品栏）
   */
  isItem?: boolean;
}

/**
 * 游戏实例物品初始化
 */
export class KrzObject {
  /**
   * 物件 UID
   */
  public uid: string;
  /**
   * 物件配置
   */
  public config: KrzObjectConfig;
  /**
   * 物件图片地址
   */
  public img: string;
  /**
   * 物件 HTMLElement
   */
  public element: HTMLElement | any;
  /**
   * 物件图片 HTMLElement
   */
  public imageElement: HTMLElement | any;
  /**
   * 物件名称
   */
  public readonly name: string | undefined;
  /**
   * 物件描述
   */
  public description: string | Array<string> | undefined;
  /**
   * 物件是否位物品（可以被选取）
   */
  public readonly isItem: boolean | undefined;
  /**
   * 物件是否显示
   */
  private _isShow: boolean;
  /**
   * 物件是否处于动画
   */
  private _isAnimating: boolean;
  /**
   * 物件是否被选取为物品
   */
  public readonly isSelectAsItem: boolean;

  constructor(config: KrzObjectConfig) {
    this.uid = nanoid(); // 唯一ID

    let imageVNode = m("img", {
      class: "krz-object-img",
      src: config.img,
      width: config.width,
      height: config.height,
    });

    let v = m(
      "div",
      {
        className: className({
          "krz-object-hide": !config.isShow,
          "krz-object": true,
        }),
        "data-id": this.uid,
        key: this.uid,
        style: style({
          left: config.x + "px",
          top: config.y + "px",
        }),
      },
      [imageVNode]
    );

    let div = createElement(v);
    let image = createElement(imageVNode);

    (
      document.querySelector(".krz-object-container") as HTMLElement
    ).appendChild(div);

    this.config = config;
    this.img = config.img;
    this.element = div;
    this.imageElement = image;
    this._isShow = config.isShow || true;
    this._isAnimating = false;
    this.name = config.name;
    this.description = config.description;
    this.isItem = config.isItem; // 是否可以被获取为物品

    this.isSelectAsItem = false; // 是否已经被选取作为物品

    screen.pushToObjects(this.uid);

    /**
     * 是否点击时显示高亮
     */
    if (config.description || this.isItem) {
      this.onclick(async () => {
        if (screen.isAnimating) return;

        if (this.isItem) {
          await showObjectGettingHighlight(this);
          addToItemBox(this);
        }

        if (!config.description) return;

        if (typeof this.description === "object") {
          for (let str of this.description) {
            await screen.dialog(str);
          }
        } else if (typeof this.description === "string") {
          await screen.dialog(this.description);
        }
      });
    }

    log("放置物品：", {
      name: this.name || "",
      uid: this.uid,
    });
  }

  /**
   * 显示物件
   */
  show(): any {
    log("显示物品", {
      name: this.name || "",
      uid: this.uid,
    });

    this._isShow = true;
    return this.element.classList.remove("krz-object-hide") && this;
  }

  /**
   * 隐藏物件
   */
  hide(): any {
    log("隐藏物品", {
      name: this.name || "",
      uid: this.uid,
    });

    this._isShow = false;
    return this.element.classList.add("krz-object-hide") && this;
  }

  /**
   * 移除物件
   */
  remove(): any {
    log("移除物品", {
      name: this.name || "",
      uid: this.uid,
    });

    this._isShow = false;
    return this.element.remove() && this;
  }

  /**
   * 设置x坐标
   * @param {number} x x坐标
   */
  setX(x: number): any {
    return (this.element.style.left = x + "px") && this;
  }

  /**
   * 设置y坐标
   * @param {number} y y坐标
   */
  setY(y: number): any {
    return (this.element.style.top = y + "px") && this;
  }

  /**
   * 设置图片宽度
   * @param {number} w 宽度
   */
  setWidth(w: number): any {
    return (this.imageElement.width = w) && this;
  }

  /**
   * 设置图片高度
   * @param {number} h 高度
   */
  setHeight(h: number): any {
    return (this.imageElement.height = h) && this;
  }

  /**
   * 设置图片地址
   * @param {string} img 图片地址
   */
  setImage(img: string): any {
    return (this.imageElement.src = img) && this;
  }

  /**
   * 移动到（动画）
   * @param {number} x x坐标
   * @param {number} y y坐标
   * @param {number} time 时间，单位秒
   */
  moveTo(x: number | null, y: number | null, time: number = 2): Promise<any> {
    log("物品动画开始", {
      name: this.name || "",
      uid: this.uid,
    });

    this._isAnimating = true;
    return new _Promise((resolve: any) => {
      this.element.style.transition = `ease-in-out ${time}s`;
      x && this.setX(x);
      y && this.setY(y);
      setTimeout(() => {
        this.element.style.transition = "unset";
        this._isAnimating = false;
        log("物品动画结束", {
          name: this.name || "",
          uid: this.uid,
        });

        resolve();
      }, time * 1000);
    });
  }

  /**
   * 传送到到（无动画）
   * @param {number} x x坐标
   * @param {number} y y坐标
   */
  goTo(x: number, y: number): any {
    this.setX(x);
    this.setY(y);
    return this;
  }

  /**
   * 监听点击事件回调
   */
  onclick(func: Function): any {
    log("添加监听点击事件", {
      name: this.name || "",
      uid: this.uid,
    });
    return this.element.addEventListener("click", (e: HTMLElementEventMap) => {
      if (this._isAnimating) return; // 若正处于动画之中，则返回
      typeof func === "function" && func(e);
    });
  }

  /**
   * 点击时继续（Promise）
   */
  clicked(): Promise<any> {
    return new _Promise((resolve: any) => {
      log("等待物品被点击", {
        name: this.name || "",
        uid: this.uid,
      });

      this.onclick(resolve);
    });
  }

  /**
   * 触碰物品时继续（Promise）
   */
  touch(destObj: KrzObject): any {
    return new _Promise(async (resolve: any) => {
      log("等待物品执行拖动触碰", {
        name: this.name || "",
        uid: this.uid,
      });

      addToTouchListener(this, destObj);

      EventBus.$on(ON_CLICK_TARGET_OBJECT, (data: any) => {
        if (data.uid !== destObj.uid) return;
        removeToTouchListener(this);

        log("目标物体点击", {
          name: this.name || "",
          uid: this.uid,
        });
        resolve();
      });
    });
  }

  /**
   * 是否显示
   */
  isShow(): boolean {
    return this._isShow;
  }

  /**
   * 是否正在执行动画
   */
  isAnimating(): boolean {
    return this._isAnimating;
  }

  /**
   * 显示物品详情页
   */
  showInfoHighlight(): any {
    return showItemHighlight(this);
  }

  /**
   * 隐藏物品详情页
   */
  hideInfoHighlight(): any {
    return removeItemHighlight();
  }
}

export function placeObject(config: KrzObjectConfig): KrzObject {
  return new KrzObject(config);
}

/**
 * 物品强显示
 * @param {string} uid uid
 */
export function objectFadeToLight(uid: string): any {
  showObjectCover();
  (
    document.querySelector(`.krz-object[data-id='${uid}']`) as HTMLElement
  ).classList.add("krz-object-top");
}

/**
 * 是否已经显示黑幕
 */
export let isShowObjectCover: boolean = false;

/**
 * 显示黑幕
 */
export function showObjectCover(text?: VNode) {
  if (isShowObjectCover || screen.isAnimating) return;
  text = text || m("span");
  screen.setStartAnimation();
  let v = m("div", { class: "krz-object-cover" }, [
    m(
      "div",
      { class: "krz-object-cover-close-tip" },
      [text],
      Flags.ELEMENT_TEXT_CHILDREN
    ),
  ]);
  let div = createElement(v) as HTMLElement;
  OBJECT_CONTAINER.insertBefore(div, document.querySelector(".krz-object"));
  div.classList.add("krz-animate-fadeIn-200");
  setTimeout(() => {
    div.classList.remove("krz-animate-fadeIn-200");
  }, 700);
  isShowObjectCover = true;

  div.onclick = hideObjectCover;
}

/**
 * 隐藏黑幕
 */
export function hideObjectCover(): any {
  const Cover = document.querySelector(".krz-object-cover") as HTMLElement;
  Cover.classList.add("krz-animate-fadeOut-400");
  EventBus.$emit(ON_HIDE_OBJECT_COVER);
  setTimeout(() => {
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
