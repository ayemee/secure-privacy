import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieBannerHeaderComponent } from './cookie-banner-header.component';

describe('CookieBannerHeaderComponent', () => {
  let component: CookieBannerHeaderComponent;
  let fixture: ComponentFixture<CookieBannerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieBannerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieBannerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
