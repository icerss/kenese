import _Promise from "promise-polyfill";
import { Load } from "./resources";

export default function S_Home() {
  return new _Promise(async function (resolve: any) {
    const { continuButton } = await Load();

    await continuButton.clicked();
    resolve();
  });
}
