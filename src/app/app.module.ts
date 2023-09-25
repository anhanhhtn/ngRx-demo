import { NgModule, isDevMode  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects"
import { booksReducer, collectionReducer } from './demo_book/store/reducers';
import {Effects} from './demo_book/store/effects';
import { BookListComponent } from './demo_book/book-list/book-list.component';
import { ParentComponent } from './demo_behaivorsubject/parent.component';
import { SiblingComponent } from './demo_behaivorsubject/sibling.component';
import { DataService } from './demo_behaivorsubject/data.service';
import { counterReducer } from './demo_counter/store/reducers';
import { CounterComponent } from './demo_counter/counter.component';
import { ExampleComponent } from './demo_comStore/counter_comStore.component';
import { BookCollectionComponent } from './demo_book/book-collection/book-collection.component';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BookListComponent,
    BookCollectionComponent,
    ParentComponent,
    SiblingComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer, books: booksReducer, collection: collectionReducer }),
    EffectsModule.forRoot([Effects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: !isDevMode(), 
      autoPause: true,
      trace: false, 
      traceLimit: 75, 
      connectOutsideZone: true
    }),
    
  ],
  bootstrap: [AppComponent],
  providers:[DataService]
})
export class AppModule { }
