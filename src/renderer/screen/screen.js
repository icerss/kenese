import "./screen.css";
import { APP, LOADING_CONTAINER } from "../dom";
import { placeObject } from "../object/object";
import debounce from "lodash/debounce";
import { log, preFetchResources } from "../utils";

class Screen {
  constructor() {
    this.scale = 1;
    this._handleCanvasSize();
    window.addEventListener("resize", debounce(this._handleCanvasSize, 100));

    log("初始化屏幕");
  }

  /**
   * 处理画布大小
   */
  _handleCanvasSize() {
    const canvasWidth = 900;
    const canvasHeight = 600;
    const windiwHeight = window.innerHeight;
    const windiwWidth = window.innerWidth;
    this.scale = Math.min(
      windiwHeight / canvasHeight,
      windiwWidth / canvasWidth
    );
    APP.style.height = canvasHeight + "px";
    APP.style.width = canvasWidth + "px";
    APP.style.transform = `scale(${this.scale})`;

    log("调整屏幕尺寸");
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
      description: "",
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
  showLoadingAnimation() {
    LOADING_CONTAINER.innerHTML = `
<div class="krz-loading ">
    <img class="krz-loading-img krz-animate-pulse"
        src="https://s-sh-1943-mingyan-static.oss.dogecdn.com/image/public/logo-v2/256x256.png">
    <div class="krz-loading-text">加载资源中……</div>
</div>`;
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
  preFetch(map) {
    return preFetchResources(map);
  }
}

export const screen = new Screen();
