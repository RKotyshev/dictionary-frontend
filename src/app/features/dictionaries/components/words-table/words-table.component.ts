import { Component, computed, effect, inject, Input, input, output, signal } from '@angular/core';
import { ColumnOptionsDirective } from '../../../../shared/directives/column-options/column-options.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, TitleCasePipe } from '@angular/common';
import { TuiCheckbox } from '@taiga-ui/kit';
import {
  TuiTableCell,
  TuiTableDirective, TuiTableHead,
  TuiTableTbody,
  TuiTableTd,
  TuiTableTh, TuiTableThead,
  TuiTableThGroup, TuiTableTr
} from '@taiga-ui/addon-table';
import { TuiTextareaModule } from '@taiga-ui/legacy';
import { ColumnWithOptions } from '../../models/dictionary.model';
import { Word } from '../../../../shared/models/word.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'df-words-table',
  imports: [
    ColumnOptionsDirective,
    FormsModule,
    ReactiveFormsModule,
    TitleCasePipe,
    TuiCheckbox,
    TuiTableCell,
    TuiTableDirective,
    TuiTableTbody,
    TuiTableTd,
    TuiTableTh,
    TuiTableThGroup,
    TuiTableThead,
    TuiTableTr,
    TuiTextareaModule,
    NgClass,
    TuiTableHead
  ],
  templateUrl: './words-table.component.html',
  styleUrl: './words-table.component.scss'
})
export class WordsTableComponent {
  public selectionChange = output<Word[]>();

  public words = input.required<Word[]>();

  public columns = input.required<string[]>();

  public columnsOptions = input.required<ColumnWithOptions[]>();

  // public selectionService = inject(DictionarySelectionService);

  // public columns = signal(['checkbox', 'id', 'english', 'russian', 'transcription', 'example', 'location']);

  // public columnsOptions = signal<ColumnWithOptions[]>([
  //   {
  //     columnName: 'id',
  //     options: {
  //       'width': '40px',
  //       'min-width': '20%',
  //     },
  //   },
  //   {
  //     columnName: 'english',
  //     options: {
  //       'min-width': '200px',
  //     },
  //   },
  //   {
  //     columnName: 'russian',
  //     options: {
  //       'min-width': '200px',
  //     },
  //   },
  //   {
  //     columnName: 'transcription',
  //     options: {
  //       'min-width': '200px',
  //     },
  //   },
  //   {
  //     columnName: 'example',
  //     options: {
  //       'min-width': '200px',
  //     },
  //   },
  //   {
  //     columnName: 'location',
  //     options: {
  //       'min-width': '150px',
  //     },
  //   },
  // ]);

  public options = signal({ updateOn: 'blur' } as const);

  public selection = new SelectionModel<Word>(true, []);

  public currentSelection = toSignal(this.selection.changed.pipe(map(()=> {
    return this.selection.selected;
  })), { initialValue: [] });

  public isAllSelected = computed(() => {
    return this.currentSelection()?.length === this.words().length;
  });

  constructor() {
    effect(() => {
      this.selectionChange.emit(this.currentSelection());
    })
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

  // public isAllSelected = computed(() => {
  //   return this.selectionService.currentSelection()?.length === this.words().length;
  // })
}
