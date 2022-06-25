import "./screen.css";
import { APP, LOADING_CONTAINER } from "../dom";
import { placeObject } from "../object/object";
import debounce from "lodash/debounce";
import { log, preFetchResources } from "../utils";
import { showDialog } from "../dialog/dialog";
import { addFullscreenInfo } from "../screeninfo/screeninfo";
import Promise from "promise-polyfill";
import { m, render } from "million";

class Screen {
  constructor() {
    this.scale = 1;
    this._handleCanvasSize();
    window.addEventListener("resize", debounce(this._handleCanvasSize, 100));

    this.isAnimating = false; // 是否正处于动画或对话框任务中

    this.objects = [];

    log("初始化屏幕");
  }

  /**
   * 处理画布大小
   */
  _handleCanvasSize() {
    const canvasWidth = 1800;
    const canvasHeight = 1200;
    const windiwHeight = window.innerHeight;
    const windiwWidth = window.innerWidth;
    this.scale = Math.min(
      windiwHeight / canvasHeight,
      windiwWidth / canvasWidth
    );
    APP.style.height = canvasHeight + "px";
    APP.style.width = canvasWidth + "px";
    APP.style.transform = `scale(${this.scale})`;

    log("调整屏幕尺寸", { scale: this.scale });

    window["_krz_game_scale"] = this.scale;
  }

  /**
   * 放置屏幕物品
   */
  place(
    config = {
      x: 0,
      y: 0,
      img: "",
      width: 0,
      height: 0,
      name: "",
      description: "" || [],
      isShow: true,
      isItem: false,
    }
  ) {
    return placeObject(config);
  }

  /**
   * 更改背景图片
   * @param {string} url 图片地址
   */
  background(url) {
    this.backgroungImage = url;
    APP.style.backgroundImage = `url("${url}")`;

    log("设置背景图片");
  }

  /**
   * 显示加载中画面
   */
  showLoadingAnimation(text) {
    let v = m("div", { class: "krz-loading" }, [
      m("img", {
        class: "krz-loading-img krz-animate-pulse",
        src: "https://s-sh-1943-mingyan-static.oss.dogecdn.com/image/public/logo-v2/256x256.png",
      }),
      m("div", { class: "krz-loading-text" }, [text ? text : "加载资源中……"]),
    ]);
    render(LOADING_CONTAINER, v);
    LOADING_CONTAINER.style.display = "block";

    log("显示加载中页面");
  }

  /**
   * 隐藏加载中画面
   */
  hideLoadingAnimation() {
    LOADING_CONTAINER.innerHTML = "";
    LOADING_CONTAINER.style.display = "none";

    log("隐藏加载中页面");
  }

  /**
   * 预加载资源
   */
  load(map) {
    return new Promise(
      async function (resolve) {
        this.showLoadingAnimation();
        this.setStartAnimation();
        await preFetchResources(map);
        this.hideLoadingAnimation();
        this.setStopAnimation();
        resolve();
      }.bind(this)
    );
  }

  /**
   * 展示全屏幕文字信息
   */
  fullInfo(text) {
    return addFullscreenInfo(text);
  }

  /**
   * 展示任务对话对话框
   */
  dialog(text) {
    return showDialog(text);
  }

  /**
   * 设置处于动画之中
   */
  setStartAnimation() {
    log("开始执行动画，任务挂起");
    return (this.isAnimating = true);
  }

  /**
   * 设置不处于动画之中
   */
  setStopAnimation() {
    log("结束执行动画，任务继续");
    return (this.isAnimating = false);
  }

  /**
   * 返回 Scale 值
   */
  getScale() {
    return window["_krz_game_scale"] || this.scale;
  }

  /**
   * this.objects.push(data)
   */
  pushToObjects(data) {
    return this.objects.push(data);
  }
}

export const screen = new Screen();
