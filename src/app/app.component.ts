import { Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  standalone: false,
})
export class AppComponent {
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
}
