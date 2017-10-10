import { Component, OnInit } from '@angular/core';
import { JokeComponent } from '../joke/joke.component';
import { Joke } from '../joke.model';

@Component({
  selector: 'app-joke-list-component',
  templateUrl: './joke-list-component.component.html',
  styleUrls: ['./joke-list-component.component.css']
})
export class JokeListComponentComponent implements OnInit {

  joke1 = new Joke('What did the cheese say when it looked in the mirror?','Hello-me (Halloumi)');

  joke2 = new Joke('What kind of cheese do you use to disguise a small horse?','Mask-a-pony(Mascarpone)');

  joke3 = new Joke('A kid threw a lump of cheddar at me','I thought: That\'s not very mature');
  
  jokes: Joke[] = [this.joke1, this.joke2,
    this.joke3];

  constructor() { 
     }

  ngOnInit() {
    
  }

}
