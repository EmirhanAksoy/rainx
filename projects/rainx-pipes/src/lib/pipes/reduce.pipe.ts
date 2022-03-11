import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce'
})
export class ReducePipe implements PipeTransform {

  transform(source: any[] | null, property: string, initialValue: number = 0, defaultValue: number = 0): number {
    if (!source || !source.length || !property.length) {
      return defaultValue;
    }
    return source.reduce((prev, curr) => prev + curr[property], initialValue);
  }

}
