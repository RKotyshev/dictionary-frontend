import { computed, Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Word } from '../../../shared/models/word.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';


interface SelectionConfig {
  item: unknown,
}

@Injectable()
export class DictionarySelectionService {
  private _selection = new SelectionModel<Word>(true, []);

  public currentSelection = toSignal(this.selection.changed.pipe(map(()=> {
    return this.selection.selected;
  })), { initialValue: [] });

  public open = computed(() => {
    return !!this.currentSelection()?.length;
  });

  public get selection(): SelectionModel<Word> {
    return this._selection;
  }

  constructor(public config: SelectionConfig) { }

  public isAllSelected = computed(() => {
    return this.currentSelection()?.length;
  })
}
