import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';

export const TasksPath = 'tasks';

const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },
  {
    path: TasksPath,
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
