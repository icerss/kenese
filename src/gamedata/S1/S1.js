import Promise from "promise-polyfill";
import { placeObject } from "../../renderer/object/object";
import { screen } from "../../renderer/screen/screen";
import { Jiekebu } from "../common/character";
import {
  bihua,
  bihuaopen,
  doorclose,
  dooropen,
  images,
  luosidao,
  yaoshi,
} from "./resources";

export default function S1() {
  return new Promise(async function (resolve) {
    await screen.preFetch(images);
    screen.background(images.bg);

    await Jiekebu.dialog("今天又是美好的一天啊！！");
    await Jiekebu.dialog("诶？门怎么是锁的？");
    await screen.dialog("<red>（任务：找到钥匙来开门）</red>");

    await luosidao.touch(bihua);
    bihua.hide();
    bihuaopen.show();
    await yaoshi.touch(doorclose);
    doorclose.hide();
    dooropen.show();

    await Jiekebu.dialog("门开了，那就准备出门吧。");
    await screen.fullInfo("测试版到此结束，请期待最终版本！！");

    resolve();
  });
}

window.placeObject = placeObject;
window.gameScreen = screen;
