import _Promise from "promise-polyfill";
import { log } from "../renderer/utils";

const GameData = [
  "S-Tips",
  "S-Home",
  "S-Menu",
  // "S-0",
];

export async function LoadGame(name: string): Promise<any> {
  log(`开始加载模块：${name}`);
  let game = await import(`./${name}`);
  return game.default();
}

export default async (): Promise<any> => {
  for (let item of GameData) {
    await LoadGame(item);
  }
};
