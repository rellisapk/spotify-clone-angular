import { Component } from '@angular/core';
import { DeezerService } from '../../services/deezer';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MiniPlayerService } from '../../services/mini-player';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
  standalone: true,
})
export class Search {
  results: any[] = [];

  constructor(
    private deezer: DeezerService,
    private route: ActivatedRoute,
    public player: MiniPlayerService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const q = params['q'];
      if (q) {
        this.deezer.searchTracks(q).subscribe(res => {
          this.results = res.data;
        });
      }
    });
  }

  playTrack(track: any) {
    this.player.play(track);
  }
}
