import { Component } from '@angular/core';

@Component({
  selector: 'app-book-card-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookCardListComponent {
  books: Array<any> = [
    {
      id: 1,
      name: "Turning Ideas Into Income",
      code: "TIII",
      price: 12.95,
      quantity: 0
    },
    {
      id: 2,
      name: "The Bullet Swage Manual",
      code: "BSM",
      price: 12.50,
      quantity: 0
    },
    {
      id: 3,
      name: "Corbin Technical Bulletins, III",
      code: "TB-3",
      price: 12.50,
      quantity: 0
    },
    {
      id: 4,
      name: "Power Swaging Book",
      code: "TB-4",
      price: 24.50,
      quantity: 0
    },
    {
      id: 5,
      name: "World Directory Bullet Makers",
      code: "WD-1",
      price: 24.50,
      quantity: 0
    },
  ]
}
