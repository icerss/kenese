import chalk from "chalk";

/**
 * Event Bus
 */
class eventBus {
  private readonly callback: object | any;
  constructor() {
    this.callback = {};
  }

  /**
   * 订阅事件
   * @param {string} name 时间名
   * @param {function} callback 回调函数
   */
  $on(name: string, callback: Function): void {
    this.callback[name] = this.callback[name] || [];
    this.callback[name].push(callback);
  }

  /**
   * 取消订阅事件
   * @param {string} name 时间名
   */
  $off(name: string): void {
    delete this.callback[name];
  }

  /**
   * 执行事件
   * @param {string} name 事件名
   * @param {any} data 数据
   */
  $emit(name: string, data?: any): void {
    console.log(chalk.bgRedBright.white("[EventBus]"), `${name}: `, data);
    if (!this.callback[name]) return;
    this.callback[name].forEach((func: Function) => {
      func(data);
    });
  }
}

export const EventBus = new eventBus();
