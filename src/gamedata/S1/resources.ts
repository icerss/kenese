import { screen } from "../../renderer/screen/screen";
import { $ } from "./i18n";

export const images = {
  bg: "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190702220935.jpg",
  jiangzhuang:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D.png",
  doorclose:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190701201817.png",
  dooropen:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_2019070201817.png",
  zhentou:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%870190701201817.png",
  didian:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%8719070121817.png",
  guizi:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_17.png",
  guiziopen:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_201701201817.png",
  luosidao:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE%E4%BF%A1%E7%89%87_20190201817.png",
  bihua: "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese/test/Us1.png",
  bihuaopen:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE_2019071201817.png",
  shijuan:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_2001817.png",
  shouji:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_01900121817.png",
  yaoshi:
    "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese%2Ftest%2F8e36b3ba54f395bec03c33862621a553_%E5%89%AF%E6%9C%AC.png",
};

export let bihuaopen = screen.place({
  img: images.bihuaopen,
  x: 646,
  y: 160,
  width: 240,
  isShow: false,
});
export let yaoshi = screen.place({
  img: images.yaoshi,
  x: 860,
  y: 210,
  width: 120,
  name: $.t("OBJ_YAOSHI_NAME"),
  description: $.t("OBJ_YAOSHI_DES"),
  isShow: true,
  isItem: true,
});
export let bihua = screen.place({
  img: images.bihua,
  x: 812,
  y: 180,
  width: 200,
  name: $.t("OBJ_BIHUA_NAME"),
  description: [$.t("OBJ_BIHUA_DES_1"), $.t("OBJ_BIHUA_DES_2")],
  isShow: true,
});
export let doorclose = screen.place({
  img: images.doorclose,
  x: 300,
  y: 290,
  width: 300,
  name: $.t("OBJ_DOOR_NAME"),
  description: $.t("OBJ_DOOR_DES"),
  isShow: true,
});
export let dooropen = screen.place({
  img: images.dooropen,
  x: 290,
  y: 260,
  height: 600,
  isShow: false,
});
export let zhentou = screen.place({
  img: images.zhentou,
  x: 172,
  y: 992,
  width: 160,
  name: $.t("OBJ_ZHENTOU_NAME"),
  description: $.t("OBJ_ZHENTOU_DES"),
  isShow: true,
});
export let guizi1 = screen.place({
  img: images.guizi,
  x: 1332,
  y: 614,
  width: 320,
  isShow: true,
});
export let guizi2 = screen.place({
  img: images.guizi,
  x: 1332,
  y: 896,
  width: 320,
  isShow: true,
});
export let guiziopen1 = screen.place({
  img: images.guiziopen,
  x: 1250,
  y: 606,
  width: 412,
  height: 278,
  isShow: false,
});
export let guiziopen2 = screen.place({
  img: images.guiziopen,
  x: 1250,
  y: 888,
  width: 412,
  height: 278,
  isShow: false,
});
export let luosidao = screen.place({
  img: images.luosidao,
  x: 1322,
  y: 642,
  width: 160,
  name: $.t("OBJ_LUOSIDAO_NAME"),
  description: [$.t("OBJ_LUOSIDAO_DES_1"), $.t("OBJ_LUOSIDAO_DES_2")],
  isShow: false,
  isItem: true,
});
export let shijuan = screen.place({
  img: images.shijuan,
  x: 1372,
  y: 904,
  width: 50,
  name: $.t("OBJ_SHIJUAN_NAME"),
  description: $.t("OBJ_SHIJUAN_DES"),
  isShow: false,
  isItem: true,
});
export let shouji = screen.place({
  img: images.shouji,
  x: 872,
  y: 1006,
  width: 50,
  name: $.t("OBJ_SHOUJI_NAME"),
  description: $.t("OBJ_SHOUJI_DES"),
  isShow: true,
  isItem: true,
});
export let didian = screen.place({
  img: images.didian,
  x: 768,
  y: 934,
  width: 400,
  isShow: true,
});

guizi1.onclick(function () {
  guiziopen1.show();
  luosidao.show();
});

guiziopen1.onclick(function () {
  guiziopen1.hide();
  luosidao.hide();
});

guizi2.onclick(function () {
  guiziopen2.show();
  shijuan.show();
});

guiziopen2.onclick(function () {
  guiziopen2.hide();
  shijuan.hide();
});

let isClickDidian = false;
didian.onclick(async function () {
  if (!isClickDidian) {
    await didian.moveTo(null, 760, 0.4);
    isClickDidian = true;
  } else {
    await didian.moveTo(null, 934, 0.4);
    isClickDidian = false;
  }
});
