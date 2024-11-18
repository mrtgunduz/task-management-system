import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('authToken', 'dummyToken'); 
      this.router.navigate(['/dashboard']); 
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/auth/login']); 
  }
}
