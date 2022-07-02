import { IKrzObject, IObjectConfig } from "../object/types";

export interface IScreen {
  /**
   * 放置物件
   * @param config
   */
  place: (config: IObjectConfig) => IKrzObject;
  /**
   * 设置北背景土坯那
   * @param url
   */
  background: (url: string) => void;
  /**
   * 显示加载效果
   * @param text
   */
  showLoadingAnimation: (text?: string) => void;
  /**
   * 隐藏加载效果
   */
  hideLoadingAnimation: () => void;
  /**
   * 预加载资源
   * @param map
   */
  load: (map: object) => Promise<any>;
  /**
   * 显示全屏文字
   * @param text
   */
  fullInfo: (text: string) => void;
  /**
   * 显示对话框
   * @param text
   */
  dialog: (text: string) => void;
  /**
   * 设置 正坐在执行动画
   */
  setStartAnimation: () => any;
  /**
   * 设置 停止在执行动画
   */
  setStopAnimation: () => any;
  /**
   * 获取 Scale 值
   */
  getScale: () => number;
  /**
   * this.objects.push(data)
   * @param data
   */
  pushToObjects: (data: string) => any;
}
