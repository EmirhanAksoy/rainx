import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileText',
  pure: false
})
export class FileTextPipe implements PipeTransform {

  transform(value: File[], ...args: any[]): string {
    return (value || []).length ? (value.length === 1 ? value[0].name : `${value.length} files`) : 'Upload';
  }

}
