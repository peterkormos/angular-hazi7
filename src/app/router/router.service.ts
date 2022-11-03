import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TasksPath } from '../app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(readonly router: Router) { }

  toTasksPage() {
    this.router.navigateByUrl(TasksPath);
  }
}
