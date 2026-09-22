import {
  Directive,
  ElementRef,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
  HostListener, // assign 'events' on a host element
  HostBinding, // assign 'attributes' on a host element
} from '@angular/core';
import { Product } from './product.model';
@Directive({
  selector: '[pa-attr]',
  standalone: false,
})
export class PaAttrDirective {
  // assigning 'events' to the host element
  /*   constructor(private element: ElementRef) {
    this.element.nativeElement.addEventListener('click', () => {
      if (this.product != null) {
        this.inst1.emit(this.product.category); // publishing...
      }
    });
  } */

  // assigning 'events' to the host element - platform agnoistic
  @HostListener('click')
  triggerCustomEvent() {
    if (this.product != null) {
      this.inst1.emit(this.product.category); // publishing...
    }
  }

  @Input('pa-product')
  product: Product = new Product(); // 5th object

  @Output('pa-category')
  inst1 = new EventEmitter();

  @Input('pa-attr') // 'bg-success'
  // assigning 'attributes' to the host element - platform agnoistic
  @HostBinding('class') // 'bg-success'  <tr class='bg-success'/>
  bgClass: string | null = ''; //  'bg-success'

  // assigning 'attributes' to the host element
  /*   ngOnChanges(changes: SimpleChanges) {
    let change = changes['bgClass'];
    let classList = this.element.nativeElement.classList;
    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  } */
}
