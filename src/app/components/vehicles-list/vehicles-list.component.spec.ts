import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesListComponent } from './vehicles-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Vehicles-List Component', () => {
  let component: VehiclesListComponent;
  let fixture: ComponentFixture<VehiclesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiclesListComponent]
      ,
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create vehicles list component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch vehicles list when component ', () => {
    expect(component.ngOnInit.call).toBeTruthy();
  });

});
