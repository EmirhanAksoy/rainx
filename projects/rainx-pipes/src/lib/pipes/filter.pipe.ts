import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(source: any[], property: string, value: string): any[] {
    if (!source || !source.length || !property.length || !value.length)
      return [];
    return source.filter(x => x[property] === value);
  }

}
