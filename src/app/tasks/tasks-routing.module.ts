import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  {
    path: '',
    component : TasksComponent
  },
    {
    path: 'newTask',
    component : NewTaskComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
