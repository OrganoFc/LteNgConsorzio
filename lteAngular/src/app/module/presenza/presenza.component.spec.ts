import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenzaComponent } from './presenza.component';

describe('PresenzaComponent', () => {
  let component: PresenzaComponent;
  let fixture: ComponentFixture<PresenzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
