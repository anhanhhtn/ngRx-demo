import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from 'src/app/core/model';
import { Store } from '@ngrx/store';
import {takeUntil, Subject, filter} from "rxjs"
import * as BooksActions from "../store/actions"
import { GoogleBooksService } from 'src/app/service/book.service';
import { selectBooks } from '../store/selectors';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  constructor(private booksService: GoogleBooksService, private store: Store) {}

  books?: BookModel[];
  //books$ = this.store.select(selectBooks);

  protected _unsubscribeAll: Subject<void> = new Subject<void>();

  onAdd(bookId: number) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: number) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }


  ngOnInit() {


    this.store.dispatch(BooksActions.getList())
    this.store.select(selectBooks)
    .pipe(
      filter(val => val !== null),
      takeUntil(this._unsubscribeAll)).subscribe(books=>{
      if(!books) return;
      this.books = books;
    })

      //   this.booksService
      // .getBooks()
      // .subscribe((books) =>
      //   this.store.dispatch(BooksActions.getListSuccess({ books }))
      // );
  }
}