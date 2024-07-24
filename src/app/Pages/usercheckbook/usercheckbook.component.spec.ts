import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercheckbookComponent } from './usercheckbook.component';

describe('UsercheckbookComponent', () => {
  let component: UsercheckbookComponent;
  let fixture: ComponentFixture<UsercheckbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercheckbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercheckbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
