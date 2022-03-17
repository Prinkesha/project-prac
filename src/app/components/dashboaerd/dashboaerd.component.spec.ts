import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboaerdComponent } from './dashboaerd.component';

describe('DashboaerdComponent', () => {
  let component: DashboaerdComponent;
  let fixture: ComponentFixture<DashboaerdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboaerdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboaerdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
