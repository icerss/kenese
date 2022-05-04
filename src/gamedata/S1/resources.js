import { screen } from "../../renderer/screen/screen";

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
  x: 343,
  y: 80,
  width: 120,
  isShow: false,
});
export let yaoshi = screen.place({
  img: images.yaoshi,
  x: 430,
  y: 105,
  width: 60,
  name: "开门的钥匙",
  description: "哦，原来钥匙放在这里啊！",
  isShow: true,
  isItem: true,
});
export let bihua = screen.place({
  img: images.bihua,
  x: 406,
  y: 90,
  width: 100,
  name: "壁画",
  description: [
    "一张壁画，似乎右边用螺丝锁上了。",
    "<red>看能不能找到一把螺丝刀把它打开吧</red>",
  ],
  isShow: true,
});
export let doorclose = screen.place({
  img: images.doorclose,
  x: 150,
  y: 145,
  width: 150,
  label: "doorclose",
  name: "门",
  description: "房间的门，似乎关得很严",
  isShow: true,
});
export let dooropen = screen.place({
  img: images.dooropen,
  x: 145,
  y: 130,
  height: 300,
  isShow: false,
});
export let zhentou = screen.place({
  img: images.zhentou,
  x: 86,
  y: 496,
  width: 80,
  name: "睡觉的枕头",
  description: "床上的枕头，很软很舒服！",
  isShow: true,
});
export let guizi1 = screen.place({
  img: images.guizi,
  x: 666,
  y: 307,
  width: 160,
  isShow: true,
});
export let guizi2 = screen.place({
  img: images.guizi,
  x: 666,
  y: 448,
  width: 160,
  isShow: true,
});
export let guiziopen1 = screen.place({
  img: images.guiziopen,
  x: 625,
  y: 303,
  width: 206,
  height: 139,
  isShow: false,
});
export let guiziopen2 = screen.place({
  img: images.guiziopen,
  x: 625,
  y: 444,
  width: 206,
  height: 139,
  isShow: false,
});
export let luosidao = screen.place({
  img: images.luosidao,
  x: 661,
  y: 321,
  width: 80,
  name: "螺丝刀",
  description: [
    "为什么柜子里会有一把螺丝刀？",
    "<red>尝试将螺丝刀拖动到壁画上旋开螺丝。</red>",
  ],
  isShow: false,
  isItem: true,
});
export let shijuan = screen.place({
  img: images.shijuan,
  x: 686,
  y: 452,
  width: 25,
  name: "零分试卷",
  description: "小时候做过的考题，现在都忘得差不多了。",
  isShow: false,
  isItem: true,
});
export let shouji = screen.place({
  img: images.shouji,
  x: 437,
  y: 503,
  width: 25,
  name: "手机",
  description: "话说谁会把手机放在地垫下面呢？？",
  isShow: true,
  isItem: true,
});
export let didian = screen.place({
  img: images.didian,
  x: 384,
  y: 467,
  width: 200,
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
    didian.moveTo(null, 380, 0.4);
    isClickDidian = true;
  } else {
    didian.moveTo(null, 467, 0.4);
    isClickDidian = false;
  }
});
