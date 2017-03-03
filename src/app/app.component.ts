import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  gold = 0;

  properties =  [
    { name: 'farm', min: 10, max: 20 },
    { name: 'cave', min: 5, max: 10 },
    { name: 'house', min: 2, max: 5 },
    { name: 'casino', min: -50, max: 50 },
  ];

  asyncProperties;

  constructor(af: AngularFire) {
    this.asyncProperties = af.database.list('properties');
  }

  visit(property) {
    let collected = Math.round(Math.random() * (property.max-property.min)) + property.min;
    this.gold += collected;
  }

}
