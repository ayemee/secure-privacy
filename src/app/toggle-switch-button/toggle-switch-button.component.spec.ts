import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwitchButtonComponent } from './toggle-switch-button.component';

describe('ToggleSwitchButtonComponent', () => {
  let component: ToggleSwitchButtonComponent;
  let fixture: ComponentFixture<ToggleSwitchButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSwitchButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSwitchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
