import "./animate.css";
import { deviceIsPhone, log } from "./utils";
import { VERSION_CONTAINER } from "./dom";
import { screen } from "./Screen";
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

const pkg = require("../../package.json");
export const GameVersion = pkg.version;
const Gamedata = ["S1", "S2"];

export const emptyImage =
  "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==";

async function init(): Promise<void> {
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
