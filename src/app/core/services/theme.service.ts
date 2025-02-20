import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

export type ThemeType = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public currentTheme: Signal<ThemeType> = computed(() => this._currentTheme());

  private _currentTheme: WritableSignal<ThemeType> = signal('dark');

  constructor() { }

  public switchTheme(): void {
    if (this.currentTheme() === 'dark') {
      this._currentTheme.set('light');
    } else {
      this._currentTheme.set('dark');
    }
  }
}
