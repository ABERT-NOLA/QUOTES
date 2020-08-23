import { Component } from '@angular/core';
import { Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote [] = [
    { id:1, name: 'You can do anything, but not everything',description:'Find an online version and watch merlin find his son'},
    { id:2, name: 'The richest man is not he who has the most, but he who needs the least',description:'Find an online version and watch merlin find his son'},
    { id:3, name: 'You miss 100 percent of the shots you never take',description:'Find an online version and watch merlin find his son'},
  ];
}
