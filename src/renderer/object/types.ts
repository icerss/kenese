export interface IObjectConfig {
  /**
   * 物件 X 坐标
   */
  x: number;
  /**
   * 物件 Y 坐标
   */
  y: number;
  /**
   * 物件图片地址
   */
  img: string;
  /**
   * 物件宽度
   */
  width?: number;
  /**
   * 物件高度
   */
  height?: number;
  /**
   * 物件名称
   */
  name?: string;
  /**
   * 物件描述
   */
  description?: string | Array<string>;
  /**
   * 物件是否显示
   */
  isShow?: boolean;
  /**
   * 物件是否位物品（是否可以被选取到物品栏）
   */
  isItem?: boolean;
}

export interface IKrzObject {
  /**
   * 物件 UID
   */
  uid: string;
  /**
   * 物件配置
   */
  config: IObjectConfig;
  /**
   * 物件图片地址
   */
  img: string;
  /**
   * 物件 HTMLElement
   */
  element: HTMLElement;
  /**
   * 物件图片 HTMLElement
   */
  imageElement: HTMLImageElement;
  /**
   * 物件名称
   */
  readonly name: string | undefined;
  /**
   * 物件描述
   */
  description: string | Array<string> | undefined;
  /**
   * 物件是否位物品（可以被选取）
   */
  readonly isItem: boolean | undefined;
  /**
   * 物件是否被选取为物品
   */
  readonly isSelectAsItem: boolean;
  /**
   * 显示物件
   */
  show: () => void;
  /**
   * 隐藏物件
   */
  hide: () => void;
  /**
   * 一处物件
   */
  remove: () => void;
  /**
   * 设置物件 X 坐标
   * @param x {number} X 坐标
   */
  setX: (x: number) => void;
  /**
   * 设置物件 Y 坐标
   * @param y {number} Y 坐标
   */
  setY: (y: number) => void;
  /**
   * 设置物件宽度
   * @param w {number} 宽度
   */
  setWidth: (w: number) => void;
  /**
   * 设置物件高度
   * @param h {number} 高度
   */
  setHeight: (h: number) => void;
  /**
   * 设置物件图片
   * @param img {string} 图片
   */
  setImage: (img: string) => void;
  /**
   * 物件移动（有动画）
   * @param x {number} X 坐标
   * @param y {number} Y 坐标
   * @param time {number} 时间（秒）
   */
  moveTo: (x: number, y: number, time: number) => Promise<any>;
  /**
   * 物件移动（无动画）
   * @param x {number} X 坐标
   * @param y {number} Y 坐标
   */
  goTo: (x: number, y: number) => void;
  /**
   * 物件点击回调
   * @param func {function} 回调函数
   */
  onclick: (func: Function) => void;
  /**
   * 当物件被点击时回调（Promise）
   */
  clicked: () => Promise<any>;
  /**
   * 当物件被触碰时回调（Promise）
   */
  touch: (destObj: IKrzObject) => Promise<any>;
  /**
   * 物件是否显示
   */
  isShow: () => boolean;
  /**
   * 物件是否处于动画
   */
  isAnimating: () => boolean;
  /**
   * 显示物件详情高亮
   */
  showInfoHighlight: () => void;
  /**
   * 隐藏物件详情高亮
   */
  hideInfoHighlight: () => void;
}
