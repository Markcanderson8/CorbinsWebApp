import { Component } from '@angular/core';

@Component({
  selector: 'app-jacket-maker-list',
  templateUrl: './jacket-maker-list.component.html',
  styleUrls: ['./jacket-maker-list.component.css']
})
export class JacketMakerListComponent {
  jacketMakers: Array<any> = [
    {
      id: 1,
      name: "RF Jacket Maker, Type-R, 224",
      code: "RFJM-22R",
      price: 199.00,
      quantity: 0
    },
    {
      id: 2,
      name: "RF Jacket Maker, Type-R, 243",
      code: "RFJM-6MR",
      price: 199.00,
      quantity: 2
    },
    {
      id: 3,
      name: "RF Jacket Maker, Type-S, 224",
      code: "RFJM-22S",
      price: 199.00,
      quantity: 0
    },
    {
      id: 4,
      name: "RF Jacket Maker, Type-S, 243",
      code: "RFJM-6MS",
      price: 199.00,
      quantity: 0
    },
    {
      id: 5,
      name: "RF Jacket Maker, Type-H, 224",
      code: "RFJM-22H",
      price: 289.00,
      quantity: 0
    },
  ]
}
