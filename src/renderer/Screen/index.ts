import "./screen.css";
import "../animate.css";
import _Promise from "promise-polyfill";
import {
  APP,
  ITEM_BOX,
  LOADING_CONTAINER,
  OBJECT_CONTAINER,
  VERSION_CONTAINER,
} from "../dom";
import { KrzObject, KrzObjectConfig, placeObject } from "../Object";
import debounce from "lodash/debounce";
import { log, preFetchResources } from "../utils";
import { showDialog } from "../Dialog";
import { addFullscreenInfo } from "../ScreenInfo";
import { m, render } from "million";
import { KrzButtonConfig, placeText } from "../Button";
import { $ } from "../../gamedata/common/i18n";
const pkg = require("../../../package.json");

class Screen {
  /**
   * 是否处于动画之中
   */
  isAnimating: boolean;
  /**
   * 伸缩量
   * @private
   */
  private scale: number;
  /**
   * 屏幕物件
   * @private
   */
  private objects: string[];
  /**
   * 背景图片
   * @private
   */
  private backgroundImage: string | undefined;

  /**
   * 是否关闭物品栏
   * @private
   */
  private isCloseItemBox: boolean;

  constructor() {
    this.scale = 1;
    this._handleCanvasSize();
    window.addEventListener("resize", debounce(this._handleCanvasSize, 100));

    this.isAnimating = false; // 是否正处于动画或对话框任务中

    this.objects = [];

    this.isCloseItemBox = false;

    VERSION_CONTAINER.text = pkg.version;

    log("初始化屏幕");
  }

  /**
   * 处理画布大小
   * @private
   */
  private _handleCanvasSize() {
    const canvasWidth = 1800;
    const canvasHeight = 1200;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    this.scale = Math.min(
      windowHeight / canvasHeight,
      windowWidth / canvasWidth
    );
    APP.style.height = canvasHeight + "px";
    APP.style.width = canvasWidth + "px";
    APP.style.transform = `scale(${this.scale})`;

    log("调整屏幕尺寸", { scale: this.scale });

    // @ts-ignore
    window["_krz_game_scale"] = this.scale;
  }

  /**
   * 放置屏幕物品
   * @param config {KrzObjectConfig} 配置
   */
  place(config: KrzObjectConfig): KrzObject {
    return placeObject(config);
  }

  /**
   * 放置屏幕按钮
   * @param config {KrzObjectConfig} 配置
   */
  placeText(config: KrzButtonConfig): KrzObject {
    return placeText(config);
  }

  /**
   * 更改背景图片
   * @param {string} url 图片地址
   */
  background(url: string): void {
    this.backgroundImage = url;
    APP.style.backgroundImage = `url("${url}")`;

    log("设置背景图片");
  }

  /**
   * 显示加载中画面
   * @param text {string} 文字
   */
  showLoadingAnimation(text?: string): Promise<any> {
    return new Promise(function (resolve: any) {
      LOADING_CONTAINER.style.display = "block";
      LOADING_CONTAINER.innerHTML = `
<div class="krz-loading">
  <div class="krz-loading-text">${text || $.t("LOADING_RESOURCE")}</div>
</div>`;
      LOADING_CONTAINER.classList.remove("krz-animate-fadeOut-1500");
      LOADING_CONTAINER.classList.add("krz-animate-fadeIn-1500");

      setTimeout(resolve, 1500);

      log("显示加载中页面");
    });
  }

  /**
   * 隐藏加载中画面
   */
  hideLoadingAnimation(): Promise<any> {
    return new Promise(function (resolve: any) {
      LOADING_CONTAINER.style.display = "block";
      LOADING_CONTAINER.innerHTML = `<div class="krz-loading"></div>`;
      LOADING_CONTAINER.classList.remove("krz-animate-fadeIn-1500");
      LOADING_CONTAINER.classList.add("krz-animate-fadeOut-1500");
      setTimeout(() => {
        LOADING_CONTAINER.classList.remove("krz-animate-fadeOut-1500");
        LOADING_CONTAINER.style.display = "none";
        LOADING_CONTAINER.innerHTML = ``;
        resolve();
      }, 1400);

      log("隐藏加载中页面");
    });
  }

  /**
   * 预加载资源
   * @param map {object} 列表
   */
  load(map: object): Promise<void> {
    log("预加载资源", map);
    return new _Promise(async (resolve: any) => {
      this.setStartAnimation();
      await preFetchResources(map);
      this.setStopAnimation();
      resolve();
    });
  }

  /**
   * 展示全屏幕文字信息
   * @param text {string} 文字
   */
  fullInfo(text: string): Promise<void> {
    return addFullscreenInfo(text);
  }

  /**
   * 展示任务对话对话框
   * @param text {string} 文字
   */
  dialog(text: string): Promise<void> {
    return showDialog(text);
  }

  /**
   * 设置处于动画之中
   */
  setStartAnimation(): any {
    log("开始执行动画，任务挂起");
    return (this.isAnimating = true);
  }

  /**
   * 设置不处于动画之中
   */
  setStopAnimation(): any {
    log("结束执行动画，任务继续");
    return (this.isAnimating = false);
  }

  /**
   * 返回 Scale 值
   */
  getScale(): number {
    // @ts-ignore
    return window["_krz_game_scale"] || this.scale;
  }

  /**
   * this.objects.push(data)
   * @param data {string} 数据
   */
  pushToObjects(data: string): any {
    return this.objects.push(data);
  }

  /**
   * 关闭物品栏
   */
  closeItemBox(): void {
    this.isCloseItemBox = true;
    ITEM_BOX.style.display = "none";
    log("关闭物品栏");
  }

  /**
   * 显示物品栏
   */
  showItemBox(): void {
    this.isCloseItemBox = false;
    ITEM_BOX.style.display = "flex";
    log("显示物品栏");
  }

  /**
   * 转到默认
   */
  toDefaultConfig(): void {
    this.showItemBox();
    OBJECT_CONTAINER.innerHTML = "";
    log("转到默认配置");
  }
}

export const screen = new Screen();

// @ts-ignore
window["gameScreen"] = screen;
