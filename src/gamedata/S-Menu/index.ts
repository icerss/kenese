import _Promise from "promise-polyfill";
import { LoadGame } from "..";
import { Load } from "./resources";

export default function S_Home() {
  return new _Promise(async function (resolve: any) {
    const { S0 } = await Load();
    S0.onclick(async function () {
      await LoadGame("S-0");
    });
    // resolve();
  });
}
