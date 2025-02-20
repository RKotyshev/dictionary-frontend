import { Component, input } from '@angular/core';
import { Dictionary } from '../../models/dictionary.model';
import { DictionaryComponent } from '../dictionary/dictionary.component';

@Component({
  selector: 'df-dictionaries-list',
  imports: [
    DictionaryComponent
  ],
  templateUrl: './dictionaries-list.component.html',
  styleUrl: './dictionaries-list.component.scss'
})
export class DictionariesListComponent {
  public dictionaries = input<Dictionary[]>();
}
