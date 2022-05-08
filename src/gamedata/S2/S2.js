export default function S2() {
  return new Promise(async function (resolve) {
    window.location.reload();
    resolve();
  });
}
