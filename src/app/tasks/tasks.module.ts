import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { DisplayTaskPipe } from './pipe/display-task.pipe';
import { TasksRoutingModule } from './tasks-routing.module';



@NgModule({
  declarations: [
    TasksComponent,
    NewTaskComponent,
    DisplayTaskPipe
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
