import { Component } from '@angular/core';
import { DeezerService } from '../../services/deezer';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
  standalone: true,
})
export class Search {
  query = '';
  results: any[] = [];

  constructor(private deezer: DeezerService) { }

  onSearch() {
    if (!this.query.trim()) return;
    this.deezer.searchTracks(this.query).subscribe((res: any) => {
      this.results = res.data;
    });
  }
}
