import "./button.css";
import { KrzObject, KrzObjectConfig } from "../Object";
import { screen } from "../Screen";
import { log } from "../utils";

export interface KrzButtonConfig {
  /**
   * 按钮 X 坐标
   */
  x: number;
  /**
   * 按钮 Y 坐标
   */
  y: number;
  /**
   * 按钮文字
   */
  text: string;
  /**
   * 按钮字体大小
   */
  fontSize?: string;
  /**
   * 按钮颜色
   */
  fontColor?: string;
  /**
   * 按钮宽度
   */
  width?: number;
  /**
   * 按钮高度
   */
  height?: number;
}

/**
 * 按钮数量
 */
let buttonNumber = 0;

export function placeText(config: KrzButtonConfig): KrzObject {
  const { x, y, text, width, height, fontSize, fontColor } = config;
  buttonNumber++;
  log(`放置文字：${text}`);
  return screen.place({
    x,
    y,
    buttonText: text,
    buttonFontSize: fontSize,
    buttonColor: fontColor,
    width,
    height,
    name: `KrzButton_${buttonNumber}`,
    isShow: true,
  });
}
