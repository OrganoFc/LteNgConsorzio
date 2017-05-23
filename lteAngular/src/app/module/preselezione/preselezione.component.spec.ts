import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreselezioneComponent } from './preselezione.component';

describe('PreselezioneComponent', () => {
  let component: PreselezioneComponent;
  let fixture: ComponentFixture<PreselezioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreselezioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreselezioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
