export interface IGameCharacterConfig {
  name: string;
  avatar?: string;
  skin?: string;
}

export interface IGameCharacter {
  /**
   * 角色展示对话框
   * @param text {string} 对话文字
   */
  dialog: (text: string) => void;
}
