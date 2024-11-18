import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    const success = this.authService.login(this.username, this.password);
    if (!success) {
      alert('Invalid username or password!');
    }
  }

  ngOnInit(): void {
  }

}
