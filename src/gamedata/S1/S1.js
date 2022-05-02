import { showDialog } from "../../renderer/dialog/dialog";
import { placeObject } from "../../renderer/object/object";
import { screen } from "../../renderer/screen/screen";
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
  return new Promise(async function (next) {
    screen.showLoadingAnimation();
    await screen.preFetch(images);
    screen.background(images.bg);
    screen.hideLoadingAnimation();

    await screen.dialog("解恪布：今天又是美好的一天啊！！");
    await screen.dialog("解恪布：诶？门怎么是锁的？");
    await screen.dialog("<red>（任务：找到钥匙来开门）</red>");

    await luosidao.touch(bihua);
    bihua.hide();
    bihuaopen.show();
    await yaoshi.touch(doorclose);
    doorclose.hide();
    dooropen.show();
    await screen.fullInfo("开门！！！！！！！");

    next();
  });
}

window.placeObject = placeObject;
window.gameScreen = screen;
