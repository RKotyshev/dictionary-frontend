import { Component, input } from '@angular/core';
import { Dictionary } from '../../models/dictionary.model';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { TitleDirective } from '../../../../shared/directives/title/title.directive';
import { HeaderDirective } from '../../../../shared/directives/header/header.directive';
import { TuiAppearance } from '@taiga-ui/core';

@Component({
  selector: 'df-dictionary',
  imports: [
    TuiCardLarge,
    TuiHeader,
    TitleDirective,
    HeaderDirective,
    TuiAppearance
  ],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss'
})
export class DictionaryComponent {
  public dictionary = input<Dictionary>();
}
