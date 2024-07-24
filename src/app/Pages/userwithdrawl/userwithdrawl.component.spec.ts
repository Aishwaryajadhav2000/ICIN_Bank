import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwithdrawlComponent } from './userwithdrawl.component';

describe('UserwithdrawlComponent', () => {
  let component: UserwithdrawlComponent;
  let fixture: ComponentFixture<UserwithdrawlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserwithdrawlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserwithdrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
