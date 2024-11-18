import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent], // Modülün ana bileşeni
  imports: [
    RouterModule.forChild([
      { path: '', component: DashboardComponent }, // Bu modülün ana rotası
    ]),
  ],
})
export class DashboardModule {}
