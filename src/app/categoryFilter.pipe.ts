import { Pipe } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: 'filter',
  pure: false,
  standalone: false,
})
export class PaCategoryFilterPipe {
  transform(products: Product[] | undefined, category: string | undefined) {
    if (products == undefined) {
      return [];
    }

    return category == undefined || category === 'None'
      ? products
      : products.filter((p) => p.category == category);
  }
}
