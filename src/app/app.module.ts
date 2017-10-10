import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponentComponent } from './joke-list-component/joke-list-component.component';
import { Joke } from './joke.model';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
