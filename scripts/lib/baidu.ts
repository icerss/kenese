import { thru } from "lodash";

require("dotenv").config();
const md5 = require("md5");
const axios = require("axios");

const API_ENDPOINT = "https://fanyi-api.baidu.com/api/trans/vip/translate";
const BAIDU_APP_ID = process.env.BAIDU_API_ID;
const BAIDU_API_KEY = process.env.BAIDU_API_KEY;

export default async function Translate(config: {
  text: string;
  source_lang?: string;
  target_lang: string;
}): Promise<any> {
  const salt = Math.floor(Math.random() * 10000000);
  let target = config.target_lang;
  if (target === "ja") target = "jp";
  try {
    let res = await axios.get(API_ENDPOINT, {
      params: {
        q: config.text,
        from: config.source_lang || "auto",
        to: target,
        appid: BAIDU_APP_ID,
        salt,
        sign: md5(`${BAIDU_APP_ID}${config.text}${salt}${BAIDU_API_KEY}`),
      },
    });
    return res.data.trans_result[0].dst;
  } catch (err) {
    return new Error();
  }
}

// Translate({
//   text: "你好",
//   target_lang: "ja",
// }).then((res) => {
//   console.log(res);
// });
