import { Pipe, PipeTransform } from '@angular/core';
import { TaskData } from '../task.data';

@Pipe({
  name: 'displayTask'
})
export class DisplayTaskPipe implements PipeTransform {

  transform(value: TaskData, ...args: unknown[]): string {
    let returned = `${value.name} - ${value.description}`;
    return value.createdBy != 'undefined' ? returned + ` (${value.createdBy})`: returned;
  }

}
