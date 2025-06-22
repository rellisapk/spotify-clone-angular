import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeezerService } from '../../services/deezer';
import { FormsModule } from '@angular/forms';
import { MiniPlayerService } from '../../services/mini-player';

@Component({
  standalone: true,
  selector: 'app-playlist',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './playlist.html',
  styleUrl: './playlist.css'
})
export class Playlist implements OnInit {
  playlist: any = null;

  constructor(
    private deezer: DeezerService,
    private route: ActivatedRoute,
    public player: MiniPlayerService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.deezer.getPlaylist(+id).subscribe(res => this.playlist = res);
  }

  playTrack(track: any) {
    this.player.play(track);
  }

  playFirst() {
    if (this.playlist?.tracks?.data?.length > 0) {
      this.playTrack(this.playlist.tracks.data[0]);
    }
  }
}