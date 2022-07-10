import _Promise from "promise-polyfill";
import { Load } from "./resources";

export default function S_Home() {
  return new _Promise(async function (resolve: any) {
    const { startbutton } = await Load();

    await startbutton.clicked();
    resolve();
  });
}
