import { ChangeDetectionStrategy, Component, Directive, input, ViewEncapsulation } from '@angular/core';
import { dfWithStyles } from '../../utils/with-styles';
import { dfHeaderSize } from '../../models/df-header-sizes';


@Component({
  template: '',
  styleUrls: ['./header.styles.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class HeaderStylesComponent {}

@Directive({
  selector: '[dfHeader]',
  host: {
    '[attr.data-size]': 'size()'
  },
})
export class HeaderDirective {
  public size = input<dfHeaderSize>('', { alias: 'dfHeader' });

  protected readonly nothing = dfWithStyles(HeaderStylesComponent);

  constructor() { }

}
