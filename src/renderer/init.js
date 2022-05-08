import "./animate.css";
import { deviceIsPhone, log } from "./utils";
import pkg from "../../package.json";
import { VERSION_CONTAINER } from "./dom";
import { screen } from "./screen/screen";
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

const GameVersion = pkg.version;
const Gamedata = ["S1", "S2"];

async function init() {
  if (deviceIsPhone()) {
    return screen.showLoadingAnimation("请使用电脑访问");
  }

  VERSION_CONTAINER.textContent = GameVersion;

  for (let item of Gamedata) {
    log("加载游戏：", item);
    let game = await import(
      /* webpackChunkName: "game" */ `../gamedata/${item}/${item}`
    );
    await game.default();
  }
}

Sentry.init({
  dsn: "https://b410206a05b44426a692b486ae947074@o947661.ingest.sentry.io/6387179",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

init();
