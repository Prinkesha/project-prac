import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerviewComponent } from './cutomerview.component';

describe('CutomerviewComponent', () => {
  let component: CutomerviewComponent;
  let fixture: ComponentFixture<CutomerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomerviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
