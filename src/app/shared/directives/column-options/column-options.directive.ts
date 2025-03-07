import {
  computed,
  Directive,
  inject,
  input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { ColumnWithOptions } from '../../../features/dictionaries/models/dictionary.model';

@Directive({
  selector: '[dfColumnOptions]',
  host: {
    '[style.width]': 'currentColumnOptions()?.width || "auto"',
    '[style.minWidth]': 'currentColumnOptions()?.["min-width"] || "auto"',
  }
})
export class ColumnOptionsDirective implements OnInit {
  public columnName = input.required<string>({ alias: 'dfColumnOptions'});

  public dfColumnOptionsFrom = input.required<ColumnWithOptions[]>();

  public currentColumnOptions = computed(() => {
    return this.dfColumnOptionsFrom().find((currentColumnOption: ColumnWithOptions) => {
        return currentColumnOption.columnName === this.columnName();
    })?.options;
  });

  private viewContainerRef = inject(ViewContainerRef);

  private template = inject(TemplateRef);

  private renderer = inject(Renderer2);

  constructor() { }

  public ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  public ngAfterViewInit() {
    const tableRowElement = this.template.elementRef.nativeElement.previousElementSibling as HTMLTableCellElement;
    if (tableRowElement && this.currentColumnOptions()) {
      console.log('tableRowElement: ', tableRowElement);
      this.renderer.setStyle(tableRowElement, 'width', this.currentColumnOptions()?.['width'] || 'auto');
      this.renderer.setStyle(tableRowElement, 'min-width', this.currentColumnOptions()?.['min-width'] || 'auto');
      console.log('tableRowElement: ', tableRowElement);
    }
  }
}
