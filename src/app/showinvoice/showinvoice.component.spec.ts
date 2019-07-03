import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowinvoiceComponent } from './showinvoice.component';

describe('ShowinvoiceComponent', () => {
  let component: ShowinvoiceComponent;
  let fixture: ComponentFixture<ShowinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
