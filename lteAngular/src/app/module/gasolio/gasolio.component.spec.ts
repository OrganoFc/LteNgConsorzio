import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasolioComponent } from './gasolio.component';

describe('GasolioComponent', () => {
  let component: GasolioComponent;
  let fixture: ComponentFixture<GasolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
