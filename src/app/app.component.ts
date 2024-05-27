import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi_tienda';
  searchControl: FormControl = new FormControl('');

  constructor(private router: Router) {}

  onSearch() {
    const query = this.searchControl.value;
    if (query) {
      this.router.navigate(['/buscar'], { queryParams: { q: query } });
    }
  }
}
