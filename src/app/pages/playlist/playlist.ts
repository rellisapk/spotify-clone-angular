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
  playlist: any;

  constructor(
    private route: ActivatedRoute,
    private deezer: DeezerService,
    private player: MiniPlayerService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deezer.getPlaylist(id).subscribe(res => this.playlist = res);
  }

  playTrack(track: any) {
    this.player.play(track);
  }
}
