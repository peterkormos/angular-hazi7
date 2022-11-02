import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksPath } from 'src/app/app-routing.module';
import { LoginService } from 'src/app/login/login.service';
import { TaskService } from '../task.service';
import { TasksComponent } from '../tasks.component';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  name: string | undefined;
  description: string | undefined;

  constructor(readonly router: Router, readonly taskService: TaskService, readonly loginService: LoginService) { }

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
    this.router.navigateByUrl(TasksPath);
  }

}
