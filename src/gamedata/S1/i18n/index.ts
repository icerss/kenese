import { I18n } from "../../../renderer/i18n/i18n";

const zh = require("./zh.json");
const en = require("./en.json");
const ja = require("./ja.json");

export const $ = new I18n();
$.load("zh", zh);
$.load("en", en);
$.load("ja", ja);
