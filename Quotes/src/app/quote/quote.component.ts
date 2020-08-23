import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, 'You can do anything, but not everything.', 'David Allen',new Date(2020,3,14)),
    new Quote(2,'You miss 100 percent of the shots you never take.','Wayne Gretzky',new Date(2020,3,14)),
    new Quote(3,'You must be the change you wish to see in the world','Gandhi',new Date(2020,3,14)),
    new Quote(4,'Do not seek to follow in the footsteps of the men of old; seek what they sought','Basho',new Date(2020,3,14)),
    new Quote(5,'A wise man gets more use from his enemies than a fool from his friends.','Baltasar Gracian',new Date(2020,3,14)),
    new Quote(6,'We are what we repeatedly do; excellence, then, is not an act but a habit','Aristotle',new Date(2020,3,14)),

  ];
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
