import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from 'src/app/core/model';
@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: [],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<BookModel> = [];
  @Output() remove = new EventEmitter<string>();
}