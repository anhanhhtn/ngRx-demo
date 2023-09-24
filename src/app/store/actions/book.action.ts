import { createAction, props } from '@ngrx/store';
import { Book } from '../reducers/book.reducer';

export const addBook = createAction('[Book] Add Book', props<{ book: Book }>());
export const updateBook = createAction('[Book] Update Book', props<{ update: { id: number; changes: Partial<Book> }}>());
export const removeBook = createAction('[Book] Remove Book', props<{ id: number }>());
