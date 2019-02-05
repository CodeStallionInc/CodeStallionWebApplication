import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDrivesUsComponent } from './what-drives-us.component';

describe('WhatDrivesUsComponent', () => {
  let component: WhatDrivesUsComponent;
  let fixture: ComponentFixture<WhatDrivesUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatDrivesUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatDrivesUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
