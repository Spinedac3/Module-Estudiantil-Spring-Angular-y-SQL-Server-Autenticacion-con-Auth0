import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enmascarado'
})
export class EnmascaradoPipe implements PipeTransform {

  transform(value: string, character: number): string {
    
    return value.replace(character.toString(), '******');
  }

}
