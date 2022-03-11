import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(value: any, property: string, defaultResult: string = ''): any {
    if (!value || !property.length)
      return '';

    return value[property] || defaultResult;
  }

}
