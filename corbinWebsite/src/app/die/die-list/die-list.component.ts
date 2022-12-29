import { Component } from '@angular/core';

@Component({
  selector: 'app-die-list',
  templateUrl: './die-list.component.html',
  styleUrls: ['./die-list.component.css']
})
export class DieListComponent {
  dies: Array<any> = [
    {
      id: 1,
      image: "/assets/Pro-1-r.jpg",
      name: "ProSwage Die",
      code: "PRO-1-R",
      price: 298.00,
      quantity: 0
    },
    {
      id: 2,
      name: "RF Jacket Maker, Type-R, 224",
      code: "RFJM-22R",
      price: 199.00,
      quantity: 0
    },
    {
      id: 3,
      name: "Core Swage Die, Type-R",
      code: "CSW-1-R",
      price: 229.00,
      quantity: 0
    },
    {
      id: 4,
      name: "Core Seat Die, Type-R",
      code: "CS-1-R",
      price: 229.00,
      quantity: 0
    },
    {
      id: 5,
      name: "Point Forming Die, Type-R",
      code: "PF-1-R",
      price: 289.00,
      quantity: 0
    },
  ]
}
