import { playMusic } from "../../renderer/Audio";
import { screen } from "../../renderer/Screen";
import { $ } from "./i18n";

export const images = {
  bg: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/bg.png",
  jiangzhuang: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/404.png",
  doorclose: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/door.png",
  dooropen: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/dooropen.png",
  zhentou: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/zhentou.png",
  guizi1: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/guizi1.png",
  guizi2: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/guizi2.png",
  guizi1open:
    "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/guizi1open.png",
  guizi2open:
    "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/guizi2open.png",
  luosidao: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/luosidao-1.png",
  bihua: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/bihua-1.png",
  bihuaopen: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/bihuaopen.png",
  shijuan: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/404.png",
  yaoshi: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/yaoshi.png",
};

let music = {
  rain: "https://s-sh-1943-kenese.oss.dogecdn.com/game/S-0/rain.m4a",
};

export async function Load() {
  await screen.showLoadingAnimation();
  screen.toDefaultConfig();
  await screen.load(images);
  await screen.load(music);
  screen.background(images.bg);

  await playMusic.play(music.rain);

  let bihuaopen = screen.place({
    img: images.bihuaopen,
    x: 1111,
    y: 4,
    height: 250,
    isShow: false,
  });
  let yaoshi = screen.place({
    img: images.yaoshi,
    x: 1225,
    y: 33,
    width: 120,
    name: $.t("OBJ_YAOSHI_NAME"),
    description: $.t("OBJ_YAOSHI_DES"),
    isShow: true,
    isItem: true,
  });
  let bihua = screen.place({
    img: images.bihua,
    x: 1179,
    y: -3,
    width: 300,
    name: $.t("OBJ_BIHUA_NAME"),
    description: [$.t("OBJ_BIHUA_DES_1"), $.t("OBJ_BIHUA_DES_2")],
    isShow: true,
  });
  let doorclose = screen.place({
    img: images.doorclose,
    x: 788,
    y: 138,
    width: 400,
    height: 700,
    name: $.t("OBJ_DOOR_NAME"),
    description: $.t("OBJ_DOOR_DES"),
    isShow: true,
  });
  let dooropen = screen.place({
    img: images.dooropen,
    x: 755,
    y: 157,
    height: 700,
    isShow: false,
  });
  let zhentou = screen.place({
    img: images.zhentou,
    x: 172,
    y: 992,
    width: 200,
    name: $.t("OBJ_ZHENTOU_NAME"),
    description: $.t("OBJ_ZHENTOU_DES"),
    isShow: true,
  });
  zhentou.element.style.transform = "rotateZ(334deg)";
  let guizi1 = screen.place({
    img: images.guizi1,
    x: 1438,
    y: 463,
    width: 320,
    isShow: true,
  });
  let guizi2 = screen.place({
    img: images.guizi1,
    x: 1406,
    y: 788,
    width: 320,
    isShow: true,
  });
  let guiziopen1 = screen.place({
    img: images.guizi1open,
    x: 1378,
    y: 465,
    width: 412,
    height: 300,
    isShow: false,
  });
  let guiziopen2 = screen.place({
    img: images.guizi2open,
    x: 1331,
    y: 807,
    width: 412,
    height: 278,
    isShow: false,
  });
  let luosidao = screen.place({
    img: images.luosidao,
    x: 1493,
    y: 523,
    width: 160,
    name: $.t("OBJ_LUOSIDAO_NAME"),
    description: [$.t("OBJ_LUOSIDAO_DES_1"), $.t("OBJ_LUOSIDAO_DES_2")],
    isShow: false,
    isItem: true,
  });
  let shijuan = screen.place({
    img: images.shijuan,
    x: 1499,
    y: 829,
    width: 50,
    name: $.t("OBJ_SHIJUAN_NAME"),
    description: $.t("OBJ_SHIJUAN_DES"),
    isShow: false,
    isItem: true,
  });

  guizi1.onclick(function () {
    guiziopen1.show();
    guizi1.hide();
    luosidao.show();
  });

  guiziopen1.onclick(function () {
    guiziopen1.hide();
    guizi1.show();
    luosidao.hide();
  });

  guizi2.onclick(function () {
    guiziopen2.show();
    guizi2.hide();
    shijuan.show();
  });

  guiziopen2.onclick(function () {
    guiziopen2.hide();
    guizi2.show();
    shijuan.hide();
  });
  await screen.hideLoadingAnimation();
  return {
    bihua,
    bihuaopen,
    doorclose,
    dooropen,
    luosidao,
    yaoshi,
  };
}
