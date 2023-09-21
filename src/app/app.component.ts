import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {takeUntil, Subject} from "rxjs"
import * as BooksActions from "./store/actions"
import { GoogleBooksService } from './service/book.service';
import { selectBooks } from './store/selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  protected _unsubscribeAll: Subject<void> = new Subject<void>();

  onAdd(bookId: number) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: number) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksActions.getListSuccess({ books }))
      );
  }

}