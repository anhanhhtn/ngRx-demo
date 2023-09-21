import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookModel } from '../core/model';

export const selectBooks = createFeatureSelector<ReadonlyArray<BookModel>>('books');
