import { Component, Input, OnInit } from '@angular/core';
import { RouterService } from '../router.service';
import { TaskData } from '../task.data';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: TaskData | undefined;

  constructor(readonly routerService: RouterService, readonly taskService: TaskService) { }

  ngOnInit(): void {
  }

  taskIsDone() {
    this.taskService.setDone(this.task!);
    this.backToTasks();
  }

  backToTasks() {
    this.routerService.toTasksPage();
  }
}
