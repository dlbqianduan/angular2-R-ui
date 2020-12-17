import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixBoxComponent } from './fix-box.component';

describe('FixBoxComponent', () => {
  let component: FixBoxComponent;
  let fixture: ComponentFixture<FixBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
