import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius',
})
export class CelsiusPipe implements PipeTransform {
  transform(value: number): number {
    return value - 32 / 1.8;
  }
}
