import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // FormsModule import edilir

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
    ]),
    NgIf,
    FormsModule
  ],
})
export class AuthModule {}
