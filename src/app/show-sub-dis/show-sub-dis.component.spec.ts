import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubDisComponent } from './show-sub-dis.component';

describe('ShowSubDisComponent', () => {
  let component: ShowSubDisComponent;
  let fixture: ComponentFixture<ShowSubDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSubDisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSubDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
