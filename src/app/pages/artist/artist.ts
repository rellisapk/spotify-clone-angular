import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeezerService } from '../../services/deezer';

@Component({
  standalone: true,
  selector: 'app-artist',
  imports: [CommonModule, RouterModule],
  templateUrl: './artist.html',
  styleUrl: './artist.css'
})
export class Artist implements OnInit {
  artist: any;
  topTracks: any[] = [];

  constructor(private route: ActivatedRoute, private deezer: DeezerService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deezer.getArtist(id).subscribe(res => this.artist = res);
    this.deezer.getArtistTopTracks(id).subscribe(res => this.topTracks = res.data);
  }
}
