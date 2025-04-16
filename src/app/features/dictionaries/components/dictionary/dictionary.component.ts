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
import { TuiButton, TuiDataList, TuiIcon, TuiTextfieldComponent } from '@taiga-ui/core';
import { TuiActionBar, TuiCheckbox, TuiInputNumber } from '@taiga-ui/kit';
import { NgClass, TitleCasePipe } from '@angular/common';
import { ColumnWithOptions } from '../../models/dictionary.model';
import { ColumnOptionsDirective } from '../../../../shared/directives/column-options/column-options.directive';
import { SelectionModel } from '@angular/cdk/collections';
import { Word } from '../../../../shared/models/word.model';
import { TuiCell } from '@taiga-ui/layout';
import { map } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { WordsTableComponent } from '../words-table/words-table.component';

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
    TuiCheckbox,
    TuiActionBar,
    TuiDataList,
    TuiIcon,
    TuiButton,
    WordsTableComponent
  ],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DictionaryComponent {
  public options = signal({ updateOn: 'blur' } as const);

  public selectedWords = signal<Word[]>([]);

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

  public selection = new SelectionModel<Word>(true, []);

  public currentSelection = toSignal(this.selection.changed.pipe(map(()=> {
    return this.selection.selected;
  })), { initialValue: [] });

  public open = computed(() => {
    return !!this.selectedWords()?.length;
  });

  public isAllSelected = computed(() => {
    return this.currentSelection()?.length === this.words().length;
  })


  constructor() {
    this.selection.changed.pipe(takeUntilDestroyed()).subscribe(() => {
      console.log('current selection: ', this.selection.selected);
    });
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

  public onSelectionChange(words: Word[]): void {
    console.log('EVENT selection change', event);
    this.selectedWords.set(words);
  }
}
