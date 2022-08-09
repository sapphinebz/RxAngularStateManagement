import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RxState, selectSlice } from '@rx-angular/state';
import { combineLatest, map, switchMap } from 'rxjs';

interface AppState {
  limit: number;
  offset: number;
}

@Injectable()
export class AppService extends RxState<AppState> {
  limit$ = this.select('limit');
  offset$ = this.select('offset');
  http = inject(HttpClient);
  pokemons$ = this.select(
    selectSlice(['limit', 'offset']),
    switchMap(({ limit, offset }) => {
      return this.http.get<any>(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
    })
    // map((res) => res.results)
  );

  // combineLatest({ limit: this.limit$, offset: this.offset$ }).pipe(
  // switchMap(({ limit, offset }) => {
  //   return this.http.get(
  //     `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  //   );
  // }),

  // );

  constructor() {
    super();

    this.initState();
  }

  initState() {
    this.set({
      limit: 10,
      offset: 0,
    });
  }

  nextPage() {
    this.set('offset', ({ offset, limit }) => {
      return offset + limit;
    });
  }

  prevPage() {
    this.set('offset', ({ offset, limit }) => {
      return offset - limit;
    });
  }
}
