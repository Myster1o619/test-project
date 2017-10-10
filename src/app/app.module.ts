import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponentComponent } from './joke-list-component/joke-list-component.component';
import { Joke } from './joke.model';
import { JokeFormComponent } from './joke-form/joke-form.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponentComponent,
    JokeFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
