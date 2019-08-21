import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSelect'
})
export class ProductSelectPipe implements PipeTransform {

  transform(items: any[], category: string): any[] {
    if(!items) return [];
    if(!category) return items;
category = category.toLowerCase();
return items.filter( item => {
      return item.section.toLowerCase().includes(category);
    });
   }

}