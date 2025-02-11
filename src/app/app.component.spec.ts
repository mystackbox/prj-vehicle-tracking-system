import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';

describe('App Component', () => {
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        //for lazy-loading
        RouterModule.forRoot([
          {
            path: 'home',
            loadChildren: () =>
              import('./features/home/home.module').then((m) => m.HomeModule),
          },
          {
            path: 'dashboard',
            loadChildren: () =>
              import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule
              )
          }
        ])
      ],
      declarations: [AppComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  it('should lazy-load HomeModule when navigating to /home', async () => {
    await router.navigate(['/home']);
    expect(location.path()).toBe('/home');
  });

  it('should lazy-load DashboardModule when navigating to /dashboard', async () => {
    await router.navigate(['/dashboard']);
    expect(location.path()).toBe('/dashboard');
  });

  it('should create app component ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have 'vehicle-tracking-system' as title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('vehicle-tracking-system');
  });
});
