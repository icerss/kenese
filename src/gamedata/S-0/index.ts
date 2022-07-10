import _Promise from "promise-polyfill";
import { screen } from "../../renderer/Screen";
import { Jiekebu } from "../common/character";
import { $ } from "./i18n";
import { Load } from "./resources";

export default function S_1() {
  return new _Promise(async function (resolve: any) {
    const { bihua, bihuaopen, doorclose, dooropen, luosidao, yaoshi, bgm } =
      await Load();

    await bgm.play();

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
