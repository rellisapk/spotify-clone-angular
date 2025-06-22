import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniPlayerService } from '../../services/mini-player';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-mini-player',
  imports: [CommonModule, RouterModule],
  templateUrl: './mini-player.html',
})
export class MiniPlayer {
  constructor(public player: MiniPlayerService) { }
}
