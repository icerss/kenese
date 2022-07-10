/**
 * 播放音乐
 * @param {string} src 音乐地址
 */
export class AudioPlayer {
  private audio: HTMLAudioElement;
  constructor(src: string) {
    this.audio = new Audio();
    this.audio.src = src;
    this.audio.volume = 0.5; // 默认音量
    this.audio.loop = true; // 默认循环
  }

  async play(): Promise<void> {
    return await this.audio.play();
  }

  pause(): void {
    return this.audio.pause();
  }

  serVolume(n: number): number {
    return (this.audio.volume = n);
  }
}
