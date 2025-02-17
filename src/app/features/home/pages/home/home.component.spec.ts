import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

describe('Home Component', () => {
  let router: Router;
  let location: Location;

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forChild([{ path: 'home', component: HomeComponent }]),
      ],
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should navigate to home page', fakeAsync(() => {
    router.navigate(['/home']);
    expect(location.path()).toBe('');
  }));

  it('should create home component', () => {
    expect(component).toBeTruthy();
  });
});
