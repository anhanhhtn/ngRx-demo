import { createReducer, on } from '@ngrx/store';

import * as BooksActions from "./actions"
import { BookModel } from '../../core/model';

export const initialStateBook: ReadonlyArray<BookModel> = [];

export const booksReducer = createReducer(
  initialStateBook,
  on(BooksActions.getListSuccess, (_state, { books }) => books)
);

export const initialStateCollection: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialStateCollection,
  on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;
 
    return [...state, bookId];
  })
);