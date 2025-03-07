import { Component, signal } from '@angular/core';
import {
  TuiTableCell,
  TuiTableDirective,
  TuiTableHead,
  TuiTableTbody, TuiTableTd,
  TuiTableTh,
  TuiTableThead, TuiTableThGroup,
  TuiTableTr
} from '@taiga-ui/addon-table';
import { TuiTextareaModule } from '@taiga-ui/legacy';
import { FormsModule } from '@angular/forms';
import { TuiTextfieldComponent } from '@taiga-ui/core';
import { TuiInputNumber } from '@taiga-ui/kit';
import { NgClass } from '@angular/common';
import { ColumnWithOptions } from '../../models/dictionary.model';
import { ColumnOptionsDirective } from '../../../../shared/directives/column-options/column-options.directive';

@Component({
  selector: 'df-dictionary',
  imports: [
    TuiTableDirective,
    TuiTableThead,
    TuiTableTh,
    TuiTableHead,
    TuiTableTbody,
    TuiTableTr,
    TuiTableCell,
    TuiTableTd,
    TuiTableThGroup,
    TuiTextareaModule,
    FormsModule,
    TuiTextfieldComponent,
    TuiInputNumber,
    NgClass,
    ColumnOptionsDirective
  ],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss'
})
export class DictionaryComponent {
  public options = signal({ updateOn: 'blur' } as const);

  public columns = signal(['id', 'english', 'russian', 'transcription', 'example', 'location']);

  public columnsOptions = signal<ColumnWithOptions[]>([
    {
      columnName: 'id',
      options: {
        'width': '40px',
        'min-width': '20%',
      },
    },
    {
      columnName: 'english',
      options: {
        'min-width': '200px',
      },
    },
    {
      columnName: 'russian',
      options: {
        'min-width': '200px',
      },
    },
    {
      columnName: 'transcription',
      options: {
        'min-width': '200px',
      },
    },
    {
      columnName: 'example',
      options: {
        'min-width': '200px',
      },
    },
    {
      columnName: 'location',
      options: {
        'min-width': '150px',
      },
    },
  ]);

  public words = signal([
    {
      id: 1,
      english: 'hello',
      russian: 'привет',
      transcription: '[həˈləʊ]',
      example: '"Hello, Katie," said Keating softly',
      location: 'Common word',
    },
  ])

  constructor() {
  }

  public onValueChange(event: unknown, key: unknown, currentWord: unknown) {
    console.log('event: ', event, 'key: ', key, 'currentWord: ', currentWord);
  }
}
