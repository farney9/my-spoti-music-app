import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarButtonOpenComponent } from './navbar-button-open.component';

describe('NavbarButtonOpenComponent', () => {
  let component: NavbarButtonOpenComponent;
  let fixture: ComponentFixture<NavbarButtonOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarButtonOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarButtonOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
