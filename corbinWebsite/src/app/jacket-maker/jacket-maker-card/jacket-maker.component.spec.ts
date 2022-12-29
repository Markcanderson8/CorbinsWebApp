import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacketMakerComponent } from './jacket-maker.component';

describe('JacketMakerComponent', () => {
  let component: JacketMakerComponent;
  let fixture: ComponentFixture<JacketMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacketMakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JacketMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
