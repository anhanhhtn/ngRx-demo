import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import {EffectsModule, provideEffects} from "@ngrx/effects"
import { booksReducer } from './store/reducers';
import {Effects} from './store/effects';
import { BookListComponent } from './demo_book/book-list.component';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer }),
    //EffectsModule.forRoot(Effects),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
