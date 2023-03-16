import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiquetOverviewComponent } from './tiquet-overview.component';

describe('TiquetOverviewComponent', () => {
  let component: TiquetOverviewComponent;
  let fixture: ComponentFixture<TiquetOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiquetOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiquetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
