import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSimpleComponent } from './newsletter-simple.component';

describe('NewsletterSimpleComponent', () => {
  let component: NewsletterSimpleComponent;
  let fixture: ComponentFixture<NewsletterSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
