import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  private static counter = 0;
  public id: string;

  //@Input()
  //public checked = false;

  @Output()
  public checkedChange = new EventEmitter();

  @Input()
  public label: string|null = null;


  public name() {
    
  }

  private internalChecked = false;

  constructor() {
    this.id = 'app-checkbox-' + CheckboxComponent.counter;
    CheckboxComponent.counter++;
  }

  public get checked(): boolean {
    return this.internalChecked;
  }

  @Input()
  public set checked(val: boolean) {
    this.internalChecked = val;
    this.checkedChange.emit(this.internalChecked);
  }

  ngOnInit(): void {
  }

}
