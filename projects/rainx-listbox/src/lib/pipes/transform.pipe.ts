import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, display: string | string[], seperator: string): string {
    if (!value)
      return '';

    if (Array.isArray(display)) {
      return display.map(x=>value[x]).join(seperator);
    } 

    return value[display] || '';

  }
  
}

