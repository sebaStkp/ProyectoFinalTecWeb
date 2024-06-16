// login.component.ts

import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './loggin.component.html',
  styleUrl: './loggin.component.scss'
})
export class LogginComponent {
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  constructor(private router: Router) { }

  enviarFormulario(email: string, password: string) {
    this.emailInput.nativeElement.value = '';
    this.passwordInput.nativeElement.value = '';
  }
  irTienda(){
    this.router.navigate(['/tienda'])
  }
}
