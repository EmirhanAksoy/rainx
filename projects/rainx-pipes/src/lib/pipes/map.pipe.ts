import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {

  transform(source: any[], property: string, defaultResult: any[] = []): any[] {
    if (!source || !source.length || !property.length)
      return defaultResult;
    const mappedSource: any[] = source.map(x => x[property]);
    return mappedSource.every(x => x === undefined) ? defaultResult : mappedSource;
  }

}
