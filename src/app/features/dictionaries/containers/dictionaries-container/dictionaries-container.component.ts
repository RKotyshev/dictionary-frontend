import { Component, inject, Injector, OnInit, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DictionariesService } from '../../services/dictionaries.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Dictionary } from '../../models/dictionary.model';
import { DictionariesListComponent } from '../../components/dictionaries-list/dictionaries-list.component';

@Component({
  selector: 'df-dictionaries-container',
  imports: [
    RouterOutlet,
    DictionariesListComponent
  ],
  templateUrl: './dictionaries-container.component.html',
  styleUrl: './dictionaries-container.component.scss'
})
export class DictionariesContainerComponent implements OnInit {
  public dictionariesList!: Signal<Dictionary[]>;

  private _injector = inject(Injector);

  private _dictionariesService = inject(DictionariesService);

  constructor() {}

  public ngOnInit() {
    this.dictionariesList = toSignal(
      this._dictionariesService.getDictionaries(),
      {
        initialValue: [],
        injector: this._injector,
      },
    );
  }
}
