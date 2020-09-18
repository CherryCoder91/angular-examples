import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicReactiveFormGroupComponent } from './basic-reactive-form-group.component';

describe('BasicReactiveFormGroupComponent', () => {
  let component: BasicReactiveFormGroupComponent;
  let fixture: ComponentFixture<BasicReactiveFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicReactiveFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicReactiveFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
