import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(value: any, args: string[], seperator: string = ' - '): string {
    if (!value || !args || !args.length)
      return '';
    return args.map(x => (value[x] || ' ')).join(seperator);
  }

}
