import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBSubpageComponent } from './page-b-subpage.component';

describe('PageBSubpageComponent', () => {
  let component: PageBSubpageComponent;
  let fixture: ComponentFixture<PageBSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
