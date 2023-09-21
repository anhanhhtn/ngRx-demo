import { createReducer, on } from '@ngrx/store';

import * as BooksActions from "./actions"
import { BookModel } from '../core/model';

export const initialState: ReadonlyArray<BookModel> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.getListSuccess, (_state, { books }) => books)
);