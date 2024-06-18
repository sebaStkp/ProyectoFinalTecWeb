import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    const ci = (document.getElementById('ci') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    this.http.post('http://localhost:3000/api/register', { nombre, apellido, ci, email, password })
      .subscribe((response: any) => {
        if (response.success) {
          this.router.navigate(['/tienda']);
        } else {
          alert('Registration failed');
        }
      });
  }
}
