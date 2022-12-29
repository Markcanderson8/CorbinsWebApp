import { Component } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css'],
})
export class PressComponent {
  presses: Array<any> = [
    {
      name: 'S-Press',
      code: 'CSP-1',
      price: 969.0,
      quantity: 1,
    },
    {
      name: 'S2-Press',
      code: 'CSP-2',
      price: 769.0,
      quantity: 2,
    },
    {
      name: 'M-Press',
      code: 'Mega-Mite',
      price: 1769.0,
      quantity: 0,
    },
    {
      name: 'S-Press',
      code: 'CSP-1',
      price: 1169.0,
      quantity: 3,
    },
  ];
}
