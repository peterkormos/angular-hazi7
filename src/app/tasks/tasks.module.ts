import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { DisplayTaskPipe } from './pipe/display-task.pipe';
import { TasksRoutingModule } from './tasks-routing.module';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    TasksComponent,
    NewTaskComponent,
    DisplayTaskPipe,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule
  ]
})
export class TasksModule { }
