import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { RouterService } from '../../router/router.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  name: string | undefined;
  description: string | undefined;

  constructor(readonly routerService: RouterService, readonly taskService: TaskService, readonly loginService: LoginService) { }

  ngOnInit(): void {
  }

  saveTask() {
    let taskdata = {
      name: this.name!,
      description: this.description!,
      isDone: false,
      createdBy: this.loginService.getUserName()!
    };

    this.taskService.saveTask(taskdata);
    this.backToTasks();
  }

  backToTasks() {
    this.routerService.toTasksPage();
  }

}
