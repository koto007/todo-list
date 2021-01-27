import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  public id: string;

  constructor() {
    let rand = Math.random();
    rand = rand * 10000000;
    rand = Math.round(rand);
    this.id = 'app-checkbox-' + rand;
  }

  ngOnInit(): void {
  }

}
