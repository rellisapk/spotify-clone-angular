import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MiniPlayerService {
  currentTrack$ = new BehaviorSubject<any>(null);
  private HISTORY_KEY = 'recently_played';
  queue: any[] = [];
  currentIndex = -1;
  currentTrack: any = null;
  isPlaying: boolean = false;
  audio: HTMLAudioElement | null = null;

  play(track: any, queue: any[] = []) {
    this.queue = queue.length ? queue : [track];
    this.currentIndex = this.queue.findIndex(t => t.id === track.id);
    this.currentTrack$.next(track);
    this.currentTrack = track;
    this.addToHistory(track);
    this.isPlaying = true;

    if (this.audio) this.audio.pause();
    this.audio = new Audio(track.preview);
    this.audio.play();
    this.audio.onended = () => (this.isPlaying = false);
  }

  next() {
    if (this.currentIndex < this.queue.length - 1) {
      this.currentIndex++;
      const nextTrack = this.queue[this.currentIndex];
      this.currentTrack$.next(nextTrack);
      this.addToHistory(nextTrack);
      this.isPlaying = true;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const prevTrack = this.queue[this.currentIndex];
      this.currentTrack$.next(prevTrack);
      this.addToHistory(prevTrack);
      this.isPlaying = true;
    }
  }

  stop() {
    this.currentTrack$.next(null);
  }

  private addToHistory(track: any) {
    if (typeof window === 'undefined') return;

    const entry = { ...track, playedAt: Date.now() };
    const existing = this.getHistory().filter((t: any) => t.id !== track.id);
    const updated = [entry, ...existing].slice(0, 10); // Max 10 items
    localStorage.setItem(this.HISTORY_KEY, JSON.stringify(updated));
  }

  getHistory(): any[] {
    if (typeof window === 'undefined') return [];
    const json = localStorage.getItem(this.HISTORY_KEY);
    return json ? JSON.parse(json) : [];
  }

  clearHistory() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.HISTORY_KEY);
    }
  }

  getCurrentTrackId(): number | null {
    return this.currentTrack?.id || null;
  }

  toggle() {
    if (!this.audio) return;
    this.isPlaying ? this.audio.pause() : this.audio.play();
    this.isPlaying = !this.isPlaying;
  }
}
