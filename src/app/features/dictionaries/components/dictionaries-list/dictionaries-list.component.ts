import { Component, input } from '@angular/core';
import { Dictionary } from '../../models/dictionary.model';
import { DictionaryCardComponent } from '../dictionary-card/dictionary-card.component';

@Component({
  selector: 'df-dictionaries-list',
  imports: [
    DictionaryCardComponent
  ],
  templateUrl: './dictionaries-list.component.html',
  styleUrl: './dictionaries-list.component.scss'
})
export class DictionariesListComponent {
  public dictionaries = input<Dictionary[]>();
}
