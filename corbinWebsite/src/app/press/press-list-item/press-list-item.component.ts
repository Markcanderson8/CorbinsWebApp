import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-press-list-item',
  templateUrl: './press-list-item.component.html',
  styleUrls: ['./press-list-item.component.css']
})
export class PressListItemComponent {
  @Input() press: any
}
