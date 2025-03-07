import { Component, inject, Injector, OnInit, signal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DictionariesService } from '../../services/dictionaries.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Dictionary } from '../../models/dictionary.model';
import { DictionariesListComponent } from '../../components/dictionaries-list/dictionaries-list.component';
import { TuiLoader } from '@taiga-ui/core';
import { finalize } from 'rxjs';

@Component({
  selector: 'df-dictionaries-container',
  imports: [
    RouterOutlet,
    DictionariesListComponent,
    TuiLoader
  ],
  templateUrl: './dictionaries-container.component.html',
  styleUrl: './dictionaries-container.component.scss'
})
export class DictionariesContainerComponent implements OnInit {
  public dictionariesList!: Signal<Dictionary[]>;

  public isLoading = signal(true);

  private _injector = inject(Injector);

  private _dictionariesService = inject(DictionariesService);

  constructor() {}

  public ngOnInit() {
    this.dictionariesList = toSignal(
      this._dictionariesService.getDictionaries().pipe(
        finalize(() => this.isLoading.set(false)),
      ),
      {
        initialValue: [],
        injector: this._injector,
      },
    );
  }
}
