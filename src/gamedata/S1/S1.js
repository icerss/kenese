import Promise from "promise-polyfill";
import { screen } from "../../renderer/screen/screen";
import { Jiekebu } from "../common/character";
import { $ } from "./i18n";
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
    await screen.load(images);
    screen.background(images.bg);

    jieke

    await Jiekebu.dialog($.t("DIALOG_1"));
    await Jiekebu.dialog($.t("DIALOG_2"));
    await screen.dialog($.t("MISSION_1"));

    await luosidao.touch(bihua);
    bihua.hide();
    bihuaopen.show();
    await yaoshi.touch(doorclose);
    doorclose.hide();
    dooropen.show();

    await Jiekebu.dialog($.t("DIALOG_3"));
    await screen.fullInfo($.t("DIALOG_4"));

    resolve();
  });
}
