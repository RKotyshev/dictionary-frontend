import { InjectionToken } from '@angular/core';

export function dfCreateTokenFromFactory<T>(factory?: () => T): InjectionToken<T> {
  return factory ? new InjectionToken<T>('', {factory}) : new InjectionToken<T>('');
}
