import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminheadingComponent } from './adminheading.component';

describe('AdminheadingComponent', () => {
  let component: AdminheadingComponent;
  let fixture: ComponentFixture<AdminheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminheadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
