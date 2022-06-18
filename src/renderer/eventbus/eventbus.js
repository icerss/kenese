import chalk from "chalk";

/**
 * Event Bus
 */
class eventBus {
  constructor() {
    this.callback = {};
  }

  /**
   * 订阅事件
   * @param {string} name 时间名
   * @param {function} callback 回调函数
   */
  $on(name, callback) {
    this.callback[name] = this.callback[name] || [];
    this.callback[name].push(callback);
  }

  /**
   * 取消订阅事件
   * @param {string} name 时间名
   * @param {function} callback 回调函数
   */
  $off(name) {
    delete this.callback[name];
  }

  /**
   * 执行事件
   * @param {string} name 事件名
   * @param {any} data 数据
   */
  $emit(name, data) {
    console.log(chalk.bgRedBright.white("[EventBus]"), `${name}: `, data);
    if (!this.callback[name]) return;
    this.callback[name].forEach(function (func) {
      func(data);
    });
  }
}

export const EventBus = new eventBus();
