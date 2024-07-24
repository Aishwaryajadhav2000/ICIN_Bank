import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccountnoComponent } from './addaccountno.component';

describe('AddaccountnoComponent', () => {
  let component: AddaccountnoComponent;
  let fixture: ComponentFixture<AddaccountnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaccountnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddaccountnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
