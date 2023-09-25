import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookModel } from '../../core/model';

export const selectBooks = createFeatureSelector<BookModel[]>('books');
export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');
 
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  })