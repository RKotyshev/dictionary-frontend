import { ChangeDetectionStrategy, Component, Directive, input, ViewEncapsulation } from '@angular/core';
import { dfHeaderSize } from '../../models/df-header-sizes';
import { dfWithStyles } from '../../utils/with-styles';

@Component({
  template: '',
  styleUrls: ['./title.styles.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'df-title',
  }
})
class TitleStylesComponent {}

@Directive({
  selector: '[dfTitle]',
  host: {
    '[attr.data-size]': 'size()',
  }
})
export class TitleDirective {
  public size = input<dfHeaderSize>('', { alias: 'dfTitle' });
  protected readonly nothing = dfWithStyles(TitleStylesComponent);

  constructor() { }

}
