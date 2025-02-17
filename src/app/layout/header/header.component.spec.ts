import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('Header Component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title-tag', () => {
    const titleEl = fixture.debugElement.query(By.css('.page-title'));
    expect(titleEl).toBeTruthy();
  });

  it('should rander title-tag with value', () => {
    const titleEl = fixture.debugElement.query(By.css('.page-title'));
    expect(titleEl.nativeElement.textContent.length).toBeGreaterThan(0);
  });

  it('should render description-tag', () => {
    const descriptionEl = fixture.debugElement.query(By.css('.page-description'));
    expect(descriptionEl).toBeTruthy();
  });

  it('should rander description-tag with value', () => {
    const descriptionEl = fixture.debugElement.query(By.css('.page-description'));
    expect(descriptionEl.nativeElement.textContent.length).toBeGreaterThan(0);
  });
});
