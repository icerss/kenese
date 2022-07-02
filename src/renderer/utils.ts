import _Promise from "Promise-polyfill";
import { customAlphabet } from "nanoid";

/**
 * Debug!!!!
 */
export const log = console.log;
// @ts-ignore
window["log"] = log;

console.log(
  "\n %c %c %c The Lost Kenese " + " - ✰ " + "ERSS" + " ✰  %c  \n",
  "background: #ffb700; padding:5px 0;",
  "background: #ffb700; padding:5px 0;",
  "color: #ffb700; background: #5755d9; padding:5px 0;",
  "background: #ffb700; padding:5px 0;"
);

/**
 * 预加载资源
 */
export function preFetchResources(map: object): Promise<any> {
  log("预加载资源");
  let urls = [];
  for (let key in map) {
    // @ts-ignore
    urls.push(map[key]);
  }
  return _Promise.all(
    urls.map((img) => {
      return new _Promise((resolve: any) => {
        let i = new Image();
        i.src = img;
        i.addEventListener("load", resolve);
      });
    })
  );
}

/**
 * Nanoid
 */
export const nanoid: (size?: number) => string = customAlphabet(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  8
);

/**
 * 看是不是手机（测试中……）
 */
export function deviceIsPhone(): boolean {
  return (
    window.innerWidth <= 480 ||
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
      navigator.userAgent
    )
  );
}

/**
 * 获取url参数
 * @param {String} qs 要获取的参数名
 */
export function getQueryString(qs: string): string {
  let s = location.href as string;
  s = s.replace("?", "?&").split("&").toString();
  let re = "";
  for (let i = 1; i < s.length; i++) {
    if (s[i].indexOf(qs + "=") == 0) {
      re = s[i].replace(qs + "=", "");
    }
  }
  return re;
}

/**
 * 播放音乐
 * @param {string} src 音乐地址
 */
export class AudioPlayer {
  private audio: HTMLAudioElement;
  constructor(src: string) {
    this.audio = new Audio();
    this.audio.src = src;
    this.audio.volume = 0.5; // 默认音量
    this.audio.loop = true; // 默认循环
  }

  async play(): Promise<void> {
    return await this.audio.play();
  }

  pause(): void {
    return this.audio.pause();
  }

  serVolume(n: number): number {
    return (this.audio.volume = n);
  }
}

/**
 * 遍历 Object 所有的key
 * @param {object} object 要遍历的object
 */
export function getObjectKeys(object: object): Array<string> {
  let o = [];
  for (let key in object) o.push(key);
  return o;
}

/**
 * 渐入
 * @param {HTMLElement} element html
 */
export function fadeIn(element: HTMLElement): void {
  element.style.display = "block";
  element.classList.add("krz-animate-fadeIn");
  setTimeout(() => {
    element.classList.remove("krz-animate-fadeIn");
  }, 700);
}

/**
 * 渐出
 * @param {HTMLElement} element html
 */
export function fadeOut(element: HTMLElement): void {
  element.style.display = "block";
  element.classList.add("krz-animate-fadeOut");
  setTimeout(() => {
    element.classList.remove("krz-animate-fadeOut");
    element.style.display = "none";
  }, 500);
}
