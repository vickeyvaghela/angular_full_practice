import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StonedetailComponent } from './stonedetail.component';

describe('StonedetailComponent', () => {
  let component: StonedetailComponent;
  let fixture: ComponentFixture<StonedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StonedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
