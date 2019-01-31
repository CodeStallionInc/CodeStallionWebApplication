import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenHomeComponent } from './full-screen-home.component';

describe('FullScreenHomeComponent', () => {
  let component: FullScreenHomeComponent;
  let fixture: ComponentFixture<FullScreenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScreenHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
