import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-reactive-form',
  templateUrl: './basic-reactive-form.component.html',
  styleUrls: ['./basic-reactive-form.component.css'],
})
export class BasicReactiveFormComponent implements OnInit {
  name = new FormControl('');
  constructor() {}

  ngOnInit(): void {}

  setName() {
    this.name.setValue('James');
  }
}
