import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
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
import { TuiCheckbox, TuiInputNumber } from '@taiga-ui/kit';
import { NgClass, TitleCasePipe } from '@angular/common';
import { ColumnWithOptions } from '../../models/dictionary.model';
import { ColumnOptionsDirective } from '../../../../shared/directives/column-options/column-options.directive';
import { SelectionModel } from '@angular/cdk/collections';
import { Word } from '../../../../shared/models/word.model';
import { TuiCell } from '@taiga-ui/layout';
import { tap } from 'rxjs';

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
    ColumnOptionsDirective,
    TuiCell,
    TitleCasePipe,
    TuiCheckbox
  ],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DictionaryComponent {
  public options = signal({ updateOn: 'blur' } as const);

  public columns = signal(['checkbox', 'id', 'english', 'russian', 'transcription', 'example', 'location']);

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

  public words = signal<Word[]>([
    {
      id: 1,
      english: 'hello',
      russian: 'привет',
      transcription: '[həˈləʊ]',
      example: '"Hello, Katie," said Keating softly',
      location: 'Common word',
    },
    {
      id: 2,
      english: 'dictionary',
      russian: 'словарь',
      transcription: '[ˈdɪkʃn(ə)rɪ]',
      example: 'His mind was a dictionary of sounds and waveforms',
      location: 'Common word',
    },
  ])

  public selection = new SelectionModel<Word>(true, [])

  constructor() {
    this.selection.changed.pipe(tap(console.log)).subscribe();
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.words().length;
    return numSelected === numRows;
  }

  public toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();

      return;
    }

    this.selection.select(...this.words());
  }

  public onValueChange(event: unknown, key: unknown, currentWord: unknown): void {
    console.log('event: ', event, 'key: ', key, 'currentWord: ', currentWord);
  }
}
