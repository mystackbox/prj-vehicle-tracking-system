import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MasterPageComponent } from './layout/master-page/master-page.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { VehicleService } from './shared/services/vehicle/vehicle.service';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    VehicleService,

    //Url requests - structure
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    Title //pageTitle interface/service
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { 
    //for Font-Awesome to be accessible globally
    constructor(library: FaIconLibrary) {
      library.addIconPacks(fas);
    }
}
