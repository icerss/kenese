import { screen } from "../screen/screen";
import { nanoid } from "../utils";
import {IGameCharacter, IGameCharacterConfig} from "./types";

export class gameCharacter {
  private uid: string;
  private readonly name: string;
  private avatar: string | undefined;
  private skin: string | undefined;
  constructor(config: IGameCharacterConfig) {
    this.uid = nanoid();
    this.name = config.name;
    this.avatar = config.avatar;
    this.skin = config.skin;
  }

  /**
   * 角色展示对话框
   * @param text {string} 对话文字
   */
  dialog(text: string): void {
    return screen.dialog(`${this.name}：${text}`);
  }
}

export function character(config: IGameCharacterConfig): IGameCharacter {
  return new gameCharacter(config)
}