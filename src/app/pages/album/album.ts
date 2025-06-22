import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeezerService } from '../../services/deezer';
import { MiniPlayerService } from '../../services/mini-player';

@Component({
  standalone: true,
  selector: 'app-album',
  imports: [CommonModule, RouterModule],
  templateUrl: './album.html',
  styleUrl: './album.css'
})
export class Album implements OnInit {
  album: any = null;

  constructor(
    private deezer: DeezerService,
    private route: ActivatedRoute,
    public player: MiniPlayerService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.deezer.getAlbum(+id).subscribe(album => this.album = album);
  }

  playTrack(track: any) {
    this.player.play(track);
  }

  playFirst() {
    if (this.album?.tracks?.data?.length > 0) {
      this.playTrack(this.album.tracks.data[0]);
    }
  }
}
