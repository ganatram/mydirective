import { Pipe } from '@angular/core';

@Pipe({
  name: 'addTax', // equivalent to selector
  standalone: false,
  // pure: true,
})
export class PaAddTaxPipe {
  defaultRate = 10;

  transform(value: any, rate?: any) {
    let valueNumber = Number.parseFloat(value);
    let rateNumber =
      rate == undefined ? this.defaultRate : Number.parseInt(rate);
    return valueNumber + valueNumber * (rateNumber / 100);
  }
}
