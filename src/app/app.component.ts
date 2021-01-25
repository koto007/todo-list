import { Component } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  public tmp = true;

  public todoArray: Array<TodoItem> = [];

  public get atLeastOneChecked(): boolean {
    for (const item of this.todoArray){
      if (item.checked){
        return true;
      }
    }
    return false;
  }

  public addItem($event: KeyboardEvent): void{
    if($event.code === "Enter"){
      //const $input: HTMLInputElement|null = $event.target as HTMLInputElement;
      
      const $input: EventTarget|null = $event.target;
      console.log("input", $input);
      if($input instanceof HTMLInputElement){
        const str = $input.value.trim();
        if(str !== ""){
          this.todoArray.push({
            title: str,
            checked: false,
          });
          $input.value ="";
  
        }
        
      }
      console.log("enter pressed");

    };
  }
  public removeItem(index: number): void {

      if(index !== -1){
        this.todoArray.splice(index, 1);
      }
          
    console.log(this.todoArray);
  }
  public clearCompletedItem(): void {
      this.todoArray = this.todoArray.filter((item: TodoItem) =>{
      return !item.checked;
      });
  }
  


}
