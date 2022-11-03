import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contatto } from 'src/app/classes/contatto';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  newContact: Contatto = new Contatto();

  @Output() insertItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  insert() {
    this.insertItem.emit(this.newContact);
    this.newContact = new Contatto();
  }
}
