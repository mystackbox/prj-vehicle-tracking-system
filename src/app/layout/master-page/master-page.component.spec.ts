import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageComponent } from './master-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MasterPage Component', () => {
  let component: MasterPageComponent;
  let fixture: ComponentFixture<MasterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasterPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create  master-page component', () => {
    expect(component).toBeTruthy();
  });

});
