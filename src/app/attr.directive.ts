import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[pa-attr]',
  standalone: false,
})
export class PaAttrDirective {
  constructor(private element: ElementRef) {}

  @Input('pa-attr')
  bgClass: string | undefined; // 'bg-success' ----- 'bg-warning'

  ngOnChanges() {
    this.element.nativeElement.classList.add(
      this.bgClass || 'bg-success',
      'text-white',
    );
  }
}
