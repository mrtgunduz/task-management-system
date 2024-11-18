import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login', // Varsayılan olarak login sayfasına yönlendirme
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule), // Ana açılış rotası
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthModule), // Login & Register
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./tasks/task-routing.module').then((m) => m.TasksModule), // Görev Yönetimi
  },
  { path: '**', redirectTo: '' }, // Bilinmeyen rotalar
];
