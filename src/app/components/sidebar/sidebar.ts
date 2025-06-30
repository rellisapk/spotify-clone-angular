import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeezerService } from '../../services/deezer';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  private deezer = inject(DeezerService);
  playlists = signal<any[]>([]);
  platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.deezer.getTopPlaylists().subscribe({
        next: (data) => {
          this.playlists.set(data.data?.slice(0, 5) || []);
        },
        error: (err) => {
          console.error('JSONP Error:', err);
          this.playlists.set([]);
        }
      });
    } else {
      console.log('SSR mode, skip Deezer call');
    }
  }

}
