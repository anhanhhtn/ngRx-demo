import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import {EffectsModule, provideEffects} from "@ngrx/effects"
import { booksReducer } from './demo_book/store/reducers';
import {Effects} from './demo_book/store/effects';
import { BookListComponent } from './demo_book/book-list.component';
import { ParentComponent } from './demo_behaivorsubject/parent.component';
import { SiblingComponent } from './demo_behaivorsubject/sibling.component';
import { DataService } from './demo_behaivorsubject/data.service';
import { counterReducer } from './demo_counter/store/reducers';
import { CounterComponent } from './demo_counter/counter.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BookListComponent,
    ParentComponent,
    SiblingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer, books: booksReducer }),
    EffectsModule.forRoot([Effects]),
    
  ],
  bootstrap: [AppComponent],
  providers:[DataService]
})
export class AppModule { }
