import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniPlayerService } from '../../services/mini-player';

@Component({
  standalone: true,
  selector: 'app-mini-player',
  imports: [CommonModule],
  templateUrl: './mini-player.html',
})
export class MiniPlayer {
  trackSignal = signal<any | null>(null);
  private player = inject(MiniPlayerService);
  private audio: HTMLAudioElement | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio();

      this.player.currentTrack$.subscribe(track => {
        this.trackSignal.set(track);

        if (!this.audio) return;

        if (track) {
          this.audio.src = track.preview;
          this.audio.play();
        } else {
          this.audio.pause();
        }
      });
    }
  }

  togglePlay() {
    if (this.audio) {
      this.audio.paused ? this.audio.play() : this.audio.pause();
    }
  }

  stop() {
    this.player.stop();
  }
}
