import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MiniPlayerService } from '../../services/mini-player';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  recentTracks: any[] = [];

  constructor(private player: MiniPlayerService) { }

  ngOnInit(): void {
    this.recentTracks = this.player.getHistory();
  }

  clear() {
    this.player.clearHistory();
    this.recentTracks = [];
  }
}
