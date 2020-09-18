import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExamplesHomeComponent } from './form-examples-home.component';

describe('FormExamplesHomeComponent', () => {
  let component: FormExamplesHomeComponent;
  let fixture: ComponentFixture<FormExamplesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExamplesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExamplesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
