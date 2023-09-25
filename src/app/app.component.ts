import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { BookModel } from 'src/app/core/model';
import {takeUntil, Subject, filter} from "rxjs"
import * as BooksActions from "./demo_book/store/actions"
import { selectBookCollection, selectBooks } from './demo_book/store/selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books?: BookModel[];
  bookCollection?: BookModel[]; 
  protected _unsubscribeAll: Subject<void> = new Subject<void>();

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor( private store: Store) {}

  ngOnInit() {
    this.store.dispatch(BooksActions.getList())

    this.store.select(selectBooks)
    .pipe(
      filter(val => val !== null),
      takeUntil(this._unsubscribeAll)).subscribe(books=>{
      if(!books) return;
      this.books = books;
    })

    this.store.select(selectBookCollection)
    .pipe(
      filter(val => val !== null),
      takeUntil(this._unsubscribeAll)).subscribe(books=>{
      if(!books) return;
      this.bookCollection = books;
    })
  }
}