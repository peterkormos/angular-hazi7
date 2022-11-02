import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { TaskData } from './task.data';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { TasksPath } from '../app-routing.module';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  constructor(readonly taskService: TaskService, readonly loginService: LoginService, readonly router: Router) { }

  ngOnInit(): void {
  }

  getTasks(isDone: boolean): TaskData[] {
    let tasks = this.taskService.getTasks();

    if (tasks === undefined) {
      return new Array;
    }

    return tasks.filter(task => isDone === task.isDone);

  }

  hasTasks(isDone: boolean): boolean {
    let tasks = this.taskService.getTasks();

    if (tasks == undefined) {
      return false;
    }

    return tasks.filter(task => isDone === task.isDone).length > 0;
  }
  
  logout() {
    this.loginService.logout();
    this.router.navigateByUrl("/");
  }
}
