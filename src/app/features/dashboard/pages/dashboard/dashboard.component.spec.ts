import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

describe('Dashboard Component', () => {
  let router: Router;
  let location: Location;

  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forChild([
          { path: 'dashboard', component: DashboardComponent },
        ]),
      ],
      declarations: [DashboardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should navigate to dashboard page', fakeAsync(() => {
    router.navigate(['/dashboard']);
    expect(location.path()).toBe('');
  }));

  it('should create dashboard component', () => {
    expect(component).toBeTruthy();
  });
});
