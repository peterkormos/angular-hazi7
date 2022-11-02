import { Injectable } from '@angular/core';
import { TaskData } from './task.data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  readonly tasks_keyName = 'tasks';

  constructor() { }

  getTasks(): TaskData[] | undefined {
    let tasks = window.localStorage.getItem(this.tasks_keyName);

    return tasks == null ? undefined : JSON.parse(tasks);

  }

  saveTask(task: TaskData): TaskData[] {
    let taskItem = window.localStorage.getItem(this.tasks_keyName);

    let tasks : TaskData[] = taskItem == null ? new Array : JSON.parse(taskItem);
    console.log(tasks);

    tasks.push(task);

    this.saveToStore(tasks);
    return tasks;
  }
  
  saveToStore(tasks : TaskData[]) {
    window.localStorage.setItem(this.tasks_keyName, JSON.stringify(tasks));
  }

  setDone(doneTask: TaskData) {
    let tasks = this.getTasks()!;
    tasks.find(task => task.name === doneTask.name)!.isDone=true;
    this.saveToStore(tasks);
  }

}
