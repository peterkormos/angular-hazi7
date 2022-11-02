import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayTask'
})
export class DisplayTaskPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
