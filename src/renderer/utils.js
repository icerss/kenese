import { customAlphabet } from "nanoid";
import chalk from "chalk";
import { GameVersion } from "./init";

/**
 * 控制台输出
 */
function _consoleLog() {
  let consoleNumber = 0;
  return function () {
    consoleNumber++;
    console.log(
      chalk.magenta.bgCyanBright.bold(`[INFO]`),
      ` #${consoleNumber} ->`,
      ...arguments
    );
  };
}
/**
 * Debug!!!!
 */
export const log = _consoleLog();
window.log = log;

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
export function preFetchResources(map) {
  log("预加载资源");
  let urls = [];
  for (let key in map) {
    urls.push(map[key]);
  }
  return Promise.all(
    urls.map(function (img) {
      return new Promise(function (resolve) {
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
export const nanoid = customAlphabet(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  8
);

/**
 * 看是不是手机（测试中……）
 */
export function deviceIsPhone() {
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
export function getQueryString(qs) {
  let s = location.href;
  s = s.replace("?", "?&").split("&");
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
  constructor(src) {
    this.audio = new Audio();
    this.audio.src = src;
    this.audio.volume = 0.5; // 默认音量
    this.audio.loop = true; // 默认循环
  }

  play() {
    return this.audio.play();
  }

  pause() {
    return this.audio.pause();
  }

  serVolume(n) {
    return (this.audio.volume = n);
  }
}
