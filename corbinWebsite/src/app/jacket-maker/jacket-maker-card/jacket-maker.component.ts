import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jacket-maker',
  templateUrl: './jacket-maker.component.html',
  styleUrls: ['./jacket-maker.component.css']
})
export class JacketMakerComponent {
  @Input() jacketMaker: any
  JacketMaker: any = {
    id: 1,
    name: "RF Jacket Maker, Type-R, 224",
    code: "RFJM-22R",
    price: 199.00,
    quantity: 0
  }
}
