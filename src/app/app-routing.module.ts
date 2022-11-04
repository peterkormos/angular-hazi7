import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TasksGuard } from './tasks.guard';

export const TasksPath = 'tasks';

const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },
  {
    path: TasksPath,
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule),
    canActivate: [TasksGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
