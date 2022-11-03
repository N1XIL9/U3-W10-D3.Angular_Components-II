import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contatto } from 'src/app/classes/contatto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() contatti?: Contatto[];
  @Output() deleteItem = new EventEmitter();
  @Output() showInfo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeItem(contact: Contatto): void {
    this.deleteItem.emit(contact);
  }

  showItem(contact: Contatto) {
    this.showInfo.emit(contact);
  }
}
