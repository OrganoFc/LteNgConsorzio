import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilometraggioComponent } from './chilometraggio.component';

describe('ChilometraggioComponent', () => {
  let component: ChilometraggioComponent;
  let fixture: ComponentFixture<ChilometraggioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilometraggioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilometraggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
