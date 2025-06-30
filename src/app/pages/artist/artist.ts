import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeezerService } from '../../services/deezer';
import { MiniPlayerService } from '../../services/mini-player';
import { DurationPipe } from '../../common/duration.pipe';

@Component({
  standalone: true,
  selector: 'app-artist',
  imports: [CommonModule, RouterModule, DurationPipe],
  templateUrl: './artist.html',
  styleUrl: './artist.css'
})
export class Artist implements OnInit {
  artist: any = null;
  topTracks: any[] = [];

  constructor(
    private deezer: DeezerService,
    private route: ActivatedRoute,
    public player: MiniPlayerService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.deezer.getArtist(+id).subscribe(artist => this.artist = artist);
    this.deezer.getArtistTopTracks(+id).subscribe(top => this.topTracks = top.data.slice(0, 5));
  }

  playTrack(track: any) {
    this.player.play(track);
  }
}
