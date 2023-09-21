import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../core/model';
 
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  @Input() books: ReadonlyArray<BookModel> = [];
  @Output() add = new EventEmitter<number>();
}