import {
  Input,
  Output,
  EventEmitter,
  Directive,
  HostBinding,
  HostListener,
  SimpleChange,
} from '@angular/core';

@Directive({
  selector: 'input[paModel]',
  standalone: false,
  exportAs: 'paModel', // this export your directive selector as a template variable
})
export class PaModel {
  direction: string = 'None';
  @Input('paModel')
  modelProperty: string | number | undefined = '';
  @HostBinding('value') // 'abc'
  fieldValue: string = '';

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes['modelProperty'];
    if (change.currentValue != this.fieldValue) {
      this.fieldValue = changes['modelProperty'].currentValue || '';
      this.direction = 'Model';
    }
  }
  @Output('paModelChange')
  update = new EventEmitter<string>();

  @HostListener('input', ['$event'])
  updateValue(event: Event) {
    // Tell TypeScript that the target is specifically an input element
    const target = event.target as HTMLInputElement;
    const newValue = target.value;

    this.fieldValue = newValue;
    this.update.emit(newValue);
    this.direction = 'Element';
  }
}
