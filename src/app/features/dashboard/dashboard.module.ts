import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';
import { VehiclesListComponent } from '../../components/vehicles-list/vehicles-list.component';
import { MapComponent } from '../../components/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    DashboardComponent,
    SearchFilterComponent,
    VehiclesListComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    GoogleMapsModule
  ]
})
export class DashboardModule { 
   //for Font-Awesome to be accessible globally
   constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
