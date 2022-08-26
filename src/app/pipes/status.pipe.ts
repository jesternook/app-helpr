import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number): string{
    switch(value){
      case 0:
        return "Aberto";
      case 1:
        return "Andamento";
      case 2:
        return "Encerrado"
      default:
        return "";
    }
  }
}
