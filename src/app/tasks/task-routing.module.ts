import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: TaskListComponent },
    ]),
  ],
})
export class TasksModule {}
