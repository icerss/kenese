import _Promise from "promise-polyfill";

export default function S2() {
  return new _Promise(async function (resolve: any) {
    window.location.reload();
    resolve();
  });
}
