import { Component, ɵConsole } from '@angular/core';

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

  public addItem($event: KeyboardEvent): void{
    if($event.code === "Enter"){
      const $input: HTMLInputElement|null = $event.target as HTMLInputElement;

      if($input !== null){
        console.log($input.value);
      }

      console.log("enter pressed");


    };
  }
}
