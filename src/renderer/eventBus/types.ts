export interface IEventBus {
  /**
   * 订阅事件
   * @param {string} name 时间名
   * @param {function} callback 回调函数
   */
  $on: (name: string, callback: Function) => void;
  /**
   * 取消订阅事件
   * @param {string} name 时间名
   */
  $off: (name: string) => void;
  /**
   * 执行事件
   * @param {string} name 事件名
   * @param {any} data 数据
   */
  $emit: (name: string, data: any) => void;
}
