import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login', 
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule), 
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard], // Login kontrolü

  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./tasks/task-routing.module').then((m) => m.TasksModule), 
  },
  {
    path: '**',
    redirectTo: 'auth/login', 
  },
];
