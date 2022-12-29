import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressListItemComponent } from './press-list-item.component';

describe('PressListItemComponent', () => {
  let component: PressListItemComponent;
  let fixture: ComponentFixture<PressListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
