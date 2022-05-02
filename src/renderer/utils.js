/**
 * 控制台输出
 */
function _consoleLog() {
  let consoleNumber = 0;
  return function () {
    consoleNumber++;
    console.log(
      `[${new Date().getHours()}:${new Date().getMinutes()}]#${consoleNumber} ->`,
      ...arguments
    );
  };
}
export const log = _consoleLog();
window.log = log;

/**
 * 预加载资源
 */
export function preFetchResources(map) {
  log("预加载资源");
  let urls = [];
  for (let key in map) {
    urls.push(map[key]);
  }
  return Promise.all(
    urls.map(function (img) {
      return new Promise(function (resolve) {
        let i = new Image();
        i.src = img;
        i.addEventListener("load", resolve);
      });
    })
  );
}
