import { Component, ViewChild } from '@angular/core';
import { VehicleService } from '../../shared/services/vehicle/vehicle.service';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';
import { PassDataService } from '../../shared/services/passData/pass-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  @ViewChild(GoogleMap, { static: false }) map?: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info?: MapInfoWindow;

  zoom = 10;
  center: any;
  label: string = '';
  mapTitle: string = '';

  vehiclesList: any;
  vehicleId: number = 0;
  responseData: any;
  selectedVehicle: any;
  vehicles: any;

  errorStatus: boolean = false;
  errorMessage: string = '';
  loading: boolean = false;

  options: google.maps.MapOptions = {
    center: { lat: -26.14, lng: 28.095 },
    zoomControl: false,
    streetViewControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: 15,
    minZoom: 8,
    fullscreenControl: false,
    mapTypeControl: false,
  };

  markers: any = {};
  infoContent: String = '';
  infoWinOptions: google.maps.InfoWindowOptions = {
    minWidth: 200,
    headerContent: 'REGISTRATION NUMBER'
  };

  //DI
  constructor(
    private vehiclesApi: VehicleService,
    private passIdApi: PassDataService
  ) {}

    /**
   * Initial calls
   */
  ngOnInit(): void {
    this.markersConfig();
    this.getVehicles();

    if (this.errorStatus == false) {
      this.refreshData();
    }

    this.passIdApi.selectedId.subscribe((id) => {
      this.vehicleId = id;

      if (this.vehicleId > 0) {
        this.locateVehicle(this.vehicleId);
      }
    });
  }

   /**
   * Sets markers default parameters 
   * @returns ojbects of marker (icon settings, markers settings)
   */
  markersConfig(): void {
    console.log('being executed inside [addMarker]...');
    const icon = {
      url: '../map-icon/pin.png', // url
      scaledSize: new google.maps.Size(28, 30), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 30), // anchor
    };

    this.markers = {
      label: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: '14px',
        text: 'vehicle',
      },

      options: {
        draggable: false,
        icon: icon,
        content: 'Example',
        gmpClickable: true,
        animation: google.maps.Animation.BOUNCE,
      },
    };
  }

   /**
   * Filters vehicles list and returns the result.
   * @param marker template variable for marker
   * @param content content to be displayed when marker is clicked
   */
  openInfo(marker: any, content: any): void {
    this.infoContent = content;
    this.info?.open(marker);
  }

   /**
   * Fetches a list of vehicles.
   * @returns an array of objects for vehicles
   */
  async getVehicles(): Promise<any> {
    try {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 1500);

      this.vehiclesList = await this.vehiclesApi.get('/vehicles');
      this.vehicles = this.vehiclesList;

    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  /**
   * Auto-fetches a list of vehicles to be plotted on the map.
   * @returns an array of vehicle objects
   */
  refreshData(): any {
    console.log('being executed inside [refreshData]...');

    setInterval(() => {
      // this.markers.options.animation = google.maps.Animation.BOUNCE;
      this.getVehicles();
    }, 30000);
  }

  /**
   * Fetches vehicle details with the matching id.
   * @param id selected vehicle id
   * @returns vehicle objects
   */
  async locateVehicle(id: number): Promise<void> {
    console.log('marker changed to BOUNCE inside [locateVehicle]...');
    try {
      console.log('Id sent for filtering ' + id);
      this.responseData = await this.vehiclesApi.getVehicle('/vehicles/' + id);

      this.zoom = 12;
      this.options = {
        center: this.responseData.location.at(-1).position,
      };
    } catch (error: any) {
      this.errorStatus = true;
      this.errorMessage = error.message;
    }
  }

  /**
   * Resets values to default.
   */
  ngOnDestroy() {
    this.vehicleId = 0;
  }
}
