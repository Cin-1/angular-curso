import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace',
})
export class ReplaceSpacePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.toString().replace(/ /g, '**');
  }
}
