import { createAction, props } from '@ngrx/store';
import { BookModel } from '../../core/model';

export const getList = createAction('[Book] GET LIST');
export const getListSuccess = createAction('[Book] GET LIST SUCCESS', props<{ books: BookModel[] }>());
export const getListFailure = createAction('[Book] GET LIST FAILURE', props<{ error: any }>());
export const addBook = createAction('[Book] Add Book', props<{ bookId: string }>());
export const removeBook = createAction('[Book] Remove Book', props<{ bookId: string }>());
