import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  private static counter = 0;
  public id: string;
  @Input()
  public checked = false;

  @Input()
  public label: string|null = null;


  public name() {
    
  }

  constructor() {
    this.id = 'app-checkbox-' + CheckboxComponent.counter;
    CheckboxComponent.counter++;
  }

  ngOnInit(): void {
  }

}
