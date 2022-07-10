/**
 * 播放音乐
 */
export class AudioPlayer {
  private audio: HTMLAudioElement;
  constructor() {
    this.audio = new Audio();
    this.audio.volume = 0.1; // 默认音量
    this.audio.loop = true; // 默认循环
  }

  async play(src: string): Promise<void> {
    this.audio.src = src;
    return await this.audio.play();
  }

  pause(): void {
    return this.audio.pause();
  }

  setVolume(n: number): number {
    return (this.audio.volume = n);
  }
}

export const playMusic = new AudioPlayer();
