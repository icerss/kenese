import { gameCharacter } from "../../renderer/character/character";
import { I18n } from "../../renderer/i18n/i18n";

const zh = require("../common/i18n/zh.json");
const en = require("../common/i18n/en.json");
const ja = require("../common/i18n/ja.json");

const $ = new I18n();
$.load("zh", zh);
$.load("en", en);
$.load("ja", ja);

export const Jiekebu = new gameCharacter({
  name: $.t("CHARACTER_JIEKEBU"),
  skin: "https://s-sh-1943-mingyan-static.oss.dogecdn.com/kenese/test/%E7%89%87_20190701201741.png",
});
