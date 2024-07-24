import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcinComponent } from './icin.component';

describe('IcinComponent', () => {
  let component: IcinComponent;
  let fixture: ComponentFixture<IcinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
