import { Component, input } from '@angular/core';
import { Dictionary } from '../../models/dictionary.model';
import { TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'df-dictionary',
  imports: [
    TuiCardLarge
  ],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss'
})
export class DictionaryComponent {
  public dictionary = input<Dictionary>();
}
