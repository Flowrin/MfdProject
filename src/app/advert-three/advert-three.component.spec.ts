import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertThreeComponent } from './advert-three.component';

describe('AdvertThreeComponent', () => {
  let component: AdvertThreeComponent;
  let fixture: ComponentFixture<AdvertThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
