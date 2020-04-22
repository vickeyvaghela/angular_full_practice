import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdiamondComponent } from './searchdiamond.component';

describe('SearchdiamondComponent', () => {
  let component: SearchdiamondComponent;
  let fixture: ComponentFixture<SearchdiamondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdiamondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
