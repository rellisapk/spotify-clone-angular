import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MiniPlayerService {
  currentTrack$ = new BehaviorSubject<any>(null);
  private HISTORY_KEY = 'recently_played';

  play(track: any) {
    this.currentTrack$.next(track);
    this.addToHistory(track);
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

}
