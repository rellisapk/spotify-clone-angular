import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeezerService } from '../../services/deezer';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  playlists: any[] = [];

  constructor(private deezer: DeezerService) { }

  ngOnInit() {
    this.deezer.getTopPlaylists().subscribe((res: any) => {
      this.playlists = res.data;
    });
  }

}
