import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    InfiniteScrollModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()) // Use provideHttpClient with withInterceptorsFromDi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
