import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeezerService } from '../../services/deezer';

@Component({
  standalone: true,
  selector: 'app-track',
  imports: [CommonModule, RouterModule],
  templateUrl: './track.html',
  styles: './track.css'
})
export class Track implements OnInit {
  track: any;

  constructor(private route: ActivatedRoute, private deezer: DeezerService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.deezer.getTrack(id).subscribe(res => this.track = res);
  }
}
