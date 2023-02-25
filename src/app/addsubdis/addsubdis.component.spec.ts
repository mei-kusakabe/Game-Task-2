import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubdisComponent } from './addsubdis.component';

describe('AddsubdisComponent', () => {
  let component: AddsubdisComponent;
  let fixture: ComponentFixture<AddsubdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsubdisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsubdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
