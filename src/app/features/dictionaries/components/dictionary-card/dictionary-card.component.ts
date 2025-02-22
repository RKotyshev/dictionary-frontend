import { Component, input } from '@angular/core';
import { Dictionary } from '../../models/dictionary.model';
import { TuiCardLarge } from '@taiga-ui/layout';
import { TitleDirective } from '../../../../shared/directives/title/title.directive';
import { HeaderDirective } from '../../../../shared/directives/header/header.directive';
import { TuiAppearance } from '@taiga-ui/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'df-dictionary-card',
    imports: [
        TuiCardLarge,
        TitleDirective,
        HeaderDirective,
        TuiAppearance,
        RouterLink
    ],
  templateUrl: './dictionary-card.component.html',
  styleUrl: './dictionary-card.component.scss'
})
export class DictionaryCardComponent {
  public dictionary = input<Dictionary>();
}
