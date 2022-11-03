import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  lista = [
    {
      name: 'Daniela',
      lastName: 'De Filippo',
      city: 'Sydney',
      number: 61345657647,
    },
    {
      name: 'Bruno',
      lastName: 'Stano',
      city: 'Ginevra',
      number: 4145657647,
    },
    {
      name: 'Giovanni',
      lastName: 'Urso',
      city: 'Hong Kong',
      number: 3445657647,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
