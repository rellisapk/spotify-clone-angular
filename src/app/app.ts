import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiniPlayer } from './components/mini-player/mini-player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiniPlayer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'spotify-clone-angular';
}
