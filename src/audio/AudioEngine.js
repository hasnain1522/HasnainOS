class AudioEngine {
  constructor() {
    this.currentAudio = null;
    this.unlocked = false;
    this.pendingAudio = null;
  }

  unlock() {
    this.unlocked = true;

    if (this.pendingAudio) {
      const audio = this.pendingAudio;
      this.pendingAudio = null;
      this.play(audio);
    }
  }

  stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
  }

  play(src) {
    if (!src) return;

    if (!this.unlocked) {
      this.pendingAudio = src;
      return;
    }

    this.stop();

    const audio = new Audio(src);

    audio.volume = 0.8;
    this.currentAudio = audio;

    audio.play().catch(() => {
      this.pendingAudio = src;
    });

    audio.onended = () => {
      if (this.currentAudio === audio) {
        this.currentAudio = null;
      }
    };
  }

  playAndWait(src) {
    return new Promise((resolve) => {
      if (!src) {
        resolve();
        return;
      }

      if (!this.unlocked) {
        this.pendingAudio = src;
        resolve();
        return;
      }

      this.stop();

      const audio = new Audio(src);

      audio.volume = 0.8;
      this.currentAudio = audio;

      audio.onended = () => {
        if (this.currentAudio === audio) {
          this.currentAudio = null;
        }

        resolve();
      };

      audio.onerror = () => {
        if (this.currentAudio === audio) {
          this.currentAudio = null;
        }

        resolve();
      };

      audio.play().catch(() => {
        this.pendingAudio = src;
        resolve();
      });
    });
  }
}

export const audioEngine = new AudioEngine();