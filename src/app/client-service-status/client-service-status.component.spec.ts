import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceStatusComponent } from './client-service-status.component';

describe('ClientServiceStatusComponent', () => {
  let component: ClientServiceStatusComponent;
  let fixture: ComponentFixture<ClientServiceStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientServiceStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
