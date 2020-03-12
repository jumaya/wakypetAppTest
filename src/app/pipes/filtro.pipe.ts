import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array: any, text: string): any {
    
    if (text === '') {
      return array;
    }
    
     return array.filter(item => {
      return item.name.includes(text);
    });

  }

}
