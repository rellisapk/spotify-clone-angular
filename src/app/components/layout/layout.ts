import { Component } from '@angular/core';
import { Player } from '../player/player';
import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Player, Sidebar, Topbar],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
