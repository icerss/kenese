import { getQueryString } from "../utils";

/**
 * 获取本地语言代码
 */
function getLanguageCode() {
  return (navigator.language || navigator.browserLanguage)
    .slice(0, 2)
    .toLowerCase();
}

window["_krz_game_language_code"] = getLanguageCode();
export class I18n {
  constructor() {
    this.data = {};
    this.languageCode = window["_krz_game_language_code"];

    this.use(getQueryString("ln"));
  }

  /**
   * 加载语言配置
   * @param {string} code 语言代码
   * @param {object} object 翻译
   */
  load(code, object) {
    return (this.data[code] = object);
  }

  /**
   * 翻译
   * @param {string} key 键
   */
  t(key) {
    return (
      (this.data[this.languageCode] && this.data[this.languageCode][key]) ||
      this.data["zh"][key] ||
      ""
    );
  }

  /**
   * 强制使用语言
   * @param {string} code 语言代码
   */
  use(code) {
    this.languageCode = code;
    window["_krz_game_language_code"] = code;
  }
}
