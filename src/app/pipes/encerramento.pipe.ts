import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encerramento'
})
export class EncerramentoPipe implements PipeTransform {

  transform(value: null | string | undefined): string {
    if (value === null || value === undefined) {
      return "Não possui data de enecerramento"
    }
    else {
      return value;
    }
  }
}
