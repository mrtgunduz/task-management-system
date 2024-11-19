import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
  
    const { username, password } = this.loginForm.value;
    const loginSuccess = this.authService.login(username, password);
    if (!loginSuccess) {
      this.showErrorMessage('Kullanıcı Adı veya Şifre Hatalı');
    } 
  }
  
  private showErrorMessage(message: string): void {
    alert(message); 
  }
  
  ngOnInit(): void {
  }

}
