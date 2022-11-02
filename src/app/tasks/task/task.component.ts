import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksPath } from 'src/app/app-routing.module';
import { TaskData } from '../task.data';
import { TaskService } from '../task.service';
import { TasksComponent } from '../tasks.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: TaskData | undefined;

  constructor(readonly router: Router, readonly taskService: TaskService) { }

  ngOnInit(): void {
  }

  taskIsDone() {
    this.taskService.setDone(this.task!);
    this.backToTasks();
  }

  backToTasks() {
    this.router.navigateByUrl(TasksPath);
  }
}
