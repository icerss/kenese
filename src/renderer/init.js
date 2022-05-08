import "./animate.css";
import { log } from "./utils";
import pkg from "../../package.json";
import { VERSION_CONTAINER } from "./dom";

const GameVersion = pkg.version;
const Gamedata = ["S1", "S2"];

async function init() {
  VERSION_CONTAINER.textContent = GameVersion;

  for (let item of Gamedata) {
    log("加载游戏：", item);
    let game = await import(`../gamedata/${item}/${item}`);
    await game.default();
  }
}

init();
