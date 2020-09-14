import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExamplesHomeComponent } from './routing-examples-home.component';

describe('RoutingExamplesHomeComponent', () => {
  let component: RoutingExamplesHomeComponent;
  let fixture: ComponentFixture<RoutingExamplesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingExamplesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingExamplesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
