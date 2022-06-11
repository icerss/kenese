require("dotenv").config();
const fs = require("fs").promises;
const path = require("path");
const axios = require("axios");

const log = console.log;

const DEEPL_API_KEY = process.env.DEEPL_API_KEY;

const COMMON_TRANSLATE = {
  en: {
    解恪布: "Jie Kebu",
  },
  ja: {
    解恪布: "ジエケブ",
  },
};

async function translate(target) {
  let dir = await fs.readdir(
    path.resolve(__dirname, "../src/gamedata"),
    "utf-8"
  );
  log(dir);

  for (let dirname of dir) {
    log("==========");
    log("开始处理：", dirname);
    const baseDirPath = `../src/gamedata/${dirname}/i18n`;
    let isCommonFileExisting = await checkFileIsExisting(
      path.resolve(__dirname, baseDirPath),
      "zh.json"
    );
    log("翻译源（zh.json）", isCommonFileExisting ? "存在" : "不存在");
    if (!isCommonFileExisting) {
      log("结果：翻译源（zh.json）不存在，跳过");
      continue;
    }
    let isTargetFileExisting = await checkFileIsExisting(
      path.resolve(__dirname, baseDirPath),
      `${target}.json`
    );
    log(`目标源（${target}.json）`, isTargetFileExisting ? "存在" : "不存在");

    let originFile;
    let targetFile;

    let isFileSame = true;

    if (!isTargetFileExisting) {
      await fs.writeFile(
        path.resolve(__dirname, `${baseDirPath}/${target}.json`),
        JSON.stringify({}, null, 4),
        "utf-8"
      );
      isTargetFileExisting = true;
    }

    targetFile = await fs.readFile(
      path.resolve(__dirname, `${baseDirPath}/${target}.json`),
      "utf-8"
    );
    originFile = await fs.readFile(
      path.resolve(__dirname, `${baseDirPath}/zh.json`),
      "utf-8"
    );
    targetFile = JSON.parse(targetFile);
    originFile = JSON.parse(originFile);
    let isSame = isObjectSame(targetFile, originFile);
    if (!isSame) {
      isFileSame = false;
      log(`目标源（${target}.json）文件（场景号：${dirname}）不一致，重新翻译`);
    } else {
      log(`目标源（${target}.json）文件（场景号：${dirname}）一致，跳过`);
    }

    if (!isCommonFileExisting || (isTargetFileExisting && isFileSame)) {
      log(`结果：目标目录${baseDirPath}不执行，跳过`);
      continue;
    }

    let differences = compareObjectDifferences(originFile, targetFile);
    log(
      `结果：目标源（${target}.json）文件（场景号：${dirname}）缺少'${String(
        differences
      )}'字段的翻译，开始翻译：`
    );
    log("\n");

    for (let key of differences) {
      let text = originFile[key];
      let isRed = false;
      if (/<red>(.*?)<\/red>/.test(text)) {
        isRed = true;
        text = text.replace(/<red>(.*?)<\/red>/g, "$1");
      }
      let trans = await doTranslate(text, target);
      if (isRed) {
        trans = "<red>" + trans + "</red>";
      }
      log(`    ${text} => ${trans}`);
      targetFile[key] = trans;
    }

    log("\n");
    log("翻译结束，开始写入文件");
    await fs.writeFile(
      path.resolve(__dirname, `${baseDirPath}/${target}.json`),
      JSON.stringify(targetFile, null, 4),
      "utf-8"
    );
    log("翻译结束");
  }
}

async function checkFileIsExisting(dir, name) {
  let list = await fs.readdir(dir, "utf-8");
  return list.includes(name);
}

async function doTranslate(text, target) {
  if (COMMON_TRANSLATE[target][text]) {
    return COMMON_TRANSLATE[target][text];
  }
  try {
    let res = await axios.get(`https://api-free.deepl.com/v2/translate`, {
      params: {
        auth_key: DEEPL_API_KEY,
        text,
        source_lang: "ZH",
        target_lang: String(target).toUpperCase(),
      },
    });
    res = res.data.translations[0].text;
    return res;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * 比较两个 object 的键是否一致
 * @param {object} obj1 object1
 * @param {object} obj2 object2
 * @returns {boolean} 是否相同
 */
function isObjectSame(obj1, obj2) {
  let obj1Key = [];
  let obj2Key = [];
  for (let key in obj1) {
    obj1Key.push(key);
  }
  for (let key in obj2) {
    obj2Key.push(key);
  }
  obj1Key = obj1Key.sort();
  obj2Key = obj2Key.sort();
  return String(obj1Key) === String(obj2Key);
}

/**
 * 返回两个 object 哪几个键不同
 * @param {object} originObj 样本 Object
 * @param {object} targetObj 待比较 Object
 * @returns {array} `targetObj` 中缺少 `originObj` 中的哪几个键
 */
function compareObjectDifferences(originObj, targetObj) {
  let originKey = [];
  let targetKey = [];
  for (let key in originObj) {
    originKey.push(key);
  }
  for (let key in targetObj) {
    targetKey.push(key);
  }
  originKey = originKey.sort();
  targetKey = targetKey.sort();
  let differences = [];
  for (let originItem of originKey) {
    let isSame = false;
    for (let targetItem of targetKey) {
      if (originItem === targetItem) {
        isSame = true;
        continue;
      }
    }
    if (!isSame) {
      differences.push(originItem);
    }
  }
  return differences;
}

translate("en");
