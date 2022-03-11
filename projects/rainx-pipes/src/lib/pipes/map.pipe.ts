import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {

  transform(source: any[], property: string): any[] {
    if (!source || !source.length || !property.length)
      return [];
    return source.map(x => x[property]);
  }

}
