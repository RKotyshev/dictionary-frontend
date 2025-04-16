import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Dictionary } from '../models/dictionary.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {
  private http = inject(HttpClient);

  constructor() { }

  public getDictionaries(): Observable<Dictionary[]> {
    this.http.get('/api/dictionaries').subscribe((data) => {
      console.log('data from backend: ', data);
    });

    const dictionariesList: Dictionary[] = [
      {
        id: 1,
        title: 'Docs words',
        description: 'Words found in documentations and articles',
        isFavorite: true,
      },
      {
        id: 2,
        title: 'Everyday Words',
        description: 'The words we use every day',
        isFavorite: false,
      },
      {
        id: 3,
        title: 'Phrases',
        description: 'Stable expressions',
        isFavorite: true,
      },
      {
        id: 4,
        title: 'TV series, movies',
        description: 'The words we see on the screen',
        isFavorite: false,
      },
    ];

    return of(dictionariesList).pipe(
      delay(1500),
    );
  }
}
