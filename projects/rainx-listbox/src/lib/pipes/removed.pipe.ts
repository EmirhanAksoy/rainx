import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removed',
  pure: false
})
export class RemovedPipe implements PipeTransform {

  transform(data: any[], removed: any[], value: any): any[] {
    debugger;
    if (data && data.length) {
      if (removed && removed.length) {
        return data.filter(x => !removed.some(z => z === x[value]))
      }

      return data;
    }
    return [];
  }

}
