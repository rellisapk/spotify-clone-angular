import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeezerService } from '../../services/deezer';

@Component({
  standalone: true,
  selector: 'app-album',
  imports: [CommonModule, RouterModule],
  templateUrl: './album.html',
  styles: './album.css'
})
export class Album implements OnInit {
  album: any;

  constructor(private route: ActivatedRoute, private deezer: DeezerService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deezer.getAlbum(id).subscribe(res => this.album = res);
  }
}
