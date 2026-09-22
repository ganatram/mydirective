import {
  Directive,
  Input,
  SimpleChange,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[paIf]',
  standalone: false,
})
export class PaStructureDirective {
  constructor(
    private container: ViewContainerRef,
    private contained: TemplateRef<Object>,
  ) {}

  @Input('paIf')
  expressionResult: boolean | undefined; // true

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes['expressionResult'];

    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.contained);
      // this.container.template(this.contained)
    }
  }
}
