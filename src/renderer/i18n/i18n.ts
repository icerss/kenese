import { getQueryString, log } from "../utils";

/**
 * 获取本地语言代码
 */
function getLanguageCode() {
  return navigator.language.slice(0, 2).toLowerCase();
}

// @ts-ignore
window["_krz_game_language_code"] = getLanguageCode();
export class I18n {
  private readonly data: {
    [key: string]: {
      [key: string]: string;
    };
  };
  private languageCode: any;
  constructor() {
    this.data = {};
    // @ts-ignore
    this.languageCode = window["_krz_game_language_code"];

    this.use(getQueryString("ln"));
  }

  /**
   * 加载语言配置
   * @param {string} code 语言代码
   * @param {object} object 翻译
   */
  load(
    code: string,
    object: {
      [key: string]: string;
    }
  ) {
    return (this.data[code] = object);
  }

  /**
   * 翻译
   * @param {string} key 键
   */
  t(key: string) {
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
  use(code: string) {
    this.languageCode = code;
    // @ts-ignore
    window["_krz_game_language_code"] = code;
    log(`i18n 使用翻译文件${code}.json`);
  }
}
