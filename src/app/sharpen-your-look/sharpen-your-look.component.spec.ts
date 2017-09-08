import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharpenYourLookComponent } from './sharpen-your-look.component';

describe('SharpenYourLookComponent', () => {
  let component: SharpenYourLookComponent;
  let fixture: ComponentFixture<SharpenYourLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharpenYourLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharpenYourLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
