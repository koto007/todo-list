import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  public todoArray: Array<string> = [
    'révision angular',
    'cuisine',
    'promenade' 
  ];

}
