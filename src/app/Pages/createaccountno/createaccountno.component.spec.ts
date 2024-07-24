import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountnoComponent } from './createaccountno.component';

describe('CreateaccountnoComponent', () => {
  let component: CreateaccountnoComponent;
  let fixture: ComponentFixture<CreateaccountnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaccountnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateaccountnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
