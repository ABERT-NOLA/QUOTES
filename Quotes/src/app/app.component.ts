import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: string [];
  constructor () {
    this.quotes = ['You can do anything, but not everything' ,'The richest man is not he who has the most, but he who needs the least' ,'You miss 100 percent of the shots you never take']
  }
}
