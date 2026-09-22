import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  IterableDiffer,
  IterableDiffers,
  DefaultIterableDiffer,
  ChangeDetectorRef,
} from '@angular/core';

@Directive({
  selector: '[paForOf]',
  standalone: false,
})
export class PaIteratorDirective {
  private differ: DefaultIterableDiffer<any> | undefined;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>,
    private differs: IterableDiffers,
    private changeDetector: ChangeDetectorRef,
  ) {}

  @Input('paForOf')
  dataSource: any;

  ngOnInit() {
    //this.updateContent();
    this.differ = <DefaultIterableDiffer<any> | undefined>(
      this.differs.find(this.dataSource).create()
    );
  }

  ngDoCheck() {
    //this.updateContent();
    console.log('ngDoCheck triggered');
    let changes = this.differ!.diff(this.dataSource);
    if (changes != null) {
      console.log('ng do check  triggered - changes detected in data source');
      changes.forEachAddedItem((addition) => {
        this.container.createEmbeddedView(
          this.template,
          new paIteratorContext(
            addition.item,
            addition.currentIndex!,
            changes.length,
          ),
        );
      });
    }
  }

  /*   private updateContent() {
    this.container.clear();
    for (let i = 0; i < this.dataSource.length; i++) {
      this.container.createEmbeddedView(
        this.template,
        new paIteratorContext(this.dataSource[i], i, this.dataSource.length),
      );
    }
  } */

  /* ngOnInit() {
    this.container.clear();
    for (let i = 0; i < this.dataSource.length; i++) {
      this.container.createEmbeddedView(
        this.template,
        new paIteratorContext(this.dataSource[i], i, this.dataSource.length),
      );
    }
  } */
}

class paIteratorContext {
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;

  constructor(
    public $implicit: any,
    public index: number,
    total: number,
  ) {
    this.odd = index % 2 == 1;
    this.even = !this.odd;
    this.first = index === 0;
    this.last = index == total - 1;

    /* setInterval(() => {
      this.odd = !this.odd;
      this.even = !this.even;
      this.$implicit.price++;
    }, 2000); */
  }
}
