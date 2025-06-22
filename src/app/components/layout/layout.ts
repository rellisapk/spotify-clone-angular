import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';
import { RouterOutlet } from '@angular/router';
import { MiniPlayer } from '../mini-player/mini-player';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Sidebar, Topbar, MiniPlayer],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
