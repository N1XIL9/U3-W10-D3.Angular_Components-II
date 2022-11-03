import { Component, Input, OnInit } from '@angular/core';
import { Contatto } from 'src/app/classes/contatto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() contatti?: Contatto[];

  constructor() {}

  ngOnInit(): void {}
}
