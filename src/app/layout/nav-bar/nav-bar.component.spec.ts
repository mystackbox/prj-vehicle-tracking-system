import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('NavBar Component', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create navbar component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct routerLink for the Home link', () => {
    const homeLink = fixture.debugElement.query(By.css('#home-link')
    ).nativeElement;
    expect(homeLink.getAttribute('routerLink')).toBe('/home');
  });

  it('should have the correct routerLink for the Dashboard link', () => {
    const aboutLink = fixture.debugElement.query(By.css('#dashboard-link')
    ).nativeElement;
    expect(aboutLink.getAttribute('routerLink')).toBe('/dashboard');
  });

});
