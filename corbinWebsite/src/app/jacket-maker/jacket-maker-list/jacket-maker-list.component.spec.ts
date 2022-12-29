import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacketMakerListComponent } from './jacket-maker-list.component';

describe('JacketMakerListComponent', () => {
  let component: JacketMakerListComponent;
  let fixture: ComponentFixture<JacketMakerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacketMakerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JacketMakerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
