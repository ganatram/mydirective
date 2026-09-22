import { Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  standalone: false,
})
export class AppComponent {
  taxRate = 0;
  categoryFilter = undefined;
  itemCount = 0;

  showTable = true;

  newProduct: Product = new Product();

  model: Model = new Model();

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  submitForm() {
    this.addProduct(this.newProduct);
  }

  dateObject: Date = new Date(2020, 1, 20);
  dateString: string = '2020-02-20T00:00:00.000Z';
  dateNumber: number = 1582156800000;
}
