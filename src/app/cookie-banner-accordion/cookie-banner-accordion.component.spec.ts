import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieBannerAccordionComponent } from './cookie-banner-accordion.component';

describe('CookieBannerAccordionComponent', () => {
  let component: CookieBannerAccordionComponent;
  let fixture: ComponentFixture<CookieBannerAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieBannerAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieBannerAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
