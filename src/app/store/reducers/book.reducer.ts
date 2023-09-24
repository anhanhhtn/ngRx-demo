import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { addBook, updateBook, removeBook } from '../actions/book.action';

// Define an interface for the entity state
export interface Book {
  id: number;
  title: string;
  author: string;
}

export interface BookState extends EntityState<Book> {}

// Create an entity adapter
export const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>();

// Define the initial state
const initialState: BookState = bookAdapter.getInitialState();

// Create a reducer using the entity adapter's methods
export const bookReducer = createReducer(
  initialState,
  on(addBook, (state, { book }) => bookAdapter.addOne(book, state)),
  on(updateBook, (state, { update }) => bookAdapter.updateOne(update, state)),
  on(removeBook, (state, { id }) => bookAdapter.removeOne(id, state))
);
