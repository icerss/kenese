import { screen } from "../screen/screen";
import { nanoid } from "../utils";

export class gameCharacter {
  constructor(
    config = {
      name: "",
      avatar: "",
      skin: "",
    }
  ) {
    this.uid = nanoid();
    this.name = config.name;
    this.avatar = config.avatar;
    this.skin = config.skin;
  }

  /**
   * 角色展示对话框
   */
  dialog(text) {
    return screen.dialog(`${this.name}：${text}`);
  }
}
