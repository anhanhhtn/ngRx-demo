import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, switchMap } from 'rxjs';
import { GoogleBooksService } from '../service/book.service';
import * as BooksActions from "./actions"

@Injectable()
export class Effects {
  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActions.getList),
      exhaustMap(() =>
        this.googleBooksService.getBooks().pipe(
          map(data => BooksActions.getListSuccess({books: data})),
          catchError(error => of(BooksActions.getListFailure({ error })))
        )
      )
    );
  });
  constructor(private actions$: Actions, private googleBooksService: GoogleBooksService) {}
}
