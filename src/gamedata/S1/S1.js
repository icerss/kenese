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

    await luosidao.touch(bihua);
    bihua.hide();
    bihuaopen.show();
    await yaoshi.touch(doorclose);
    doorclose.hide();
    dooropen.show();

    next();
  });
}

window.placeObject = placeObject;
window.gameScreen = screen;
