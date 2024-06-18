import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.scss'
})
export class AdministradorComponent {
  constructor(private http: HttpClient, private router: Router) {}

  loginAdmin() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    this.http.post('http://localhost:3000/api/loginAdministrador', { email, password })
      .subscribe((response: any) => {
        if (response.success) {
          this.router.navigate(['/inicio']);
        } else {
          alert('Invalid credentials');
        }
      });
  }

}
