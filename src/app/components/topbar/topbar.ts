import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
  standalone: true
})
export class Topbar implements OnInit {
  query: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(p => this.query = p['q'] || '');
  }

  search() {
    if (this.query.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.query } });
    }
  }
}
