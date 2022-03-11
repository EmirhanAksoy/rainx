import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(source: any[], property: string, value: string): string {
    if (!source || !source.length || !property.length || !value.length)
      return '';
    const selectedItem: any | undefined = source.find(x => x[property] === value);
    return selectedItem ? selectedItem : '';
  }

}
