import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('Footer Component', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain V-Tracker All rights reserved |  Developed by Yingisani', () => {
      const footerDive = fixture.debugElement.query(By.css('#footer-wrapper'));
      expect(footerDive.nativeElement.textContent).toContain('V-Tracker. All rights reserved | Developed by Yingisani');
    });

  
});
