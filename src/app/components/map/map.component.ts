import { Component } from '@angular/core';
import { VehicleService } from '../../shared/services/vehicle/vehicle.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  status: string = 'loading';
  data!: any;
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 8;

  //Map opptiokns
  mapOptions: google.maps.MapOptions = {
    center: { lat: -26.03, lng: 28.095 },
    draggable: false,
    zoomControl: false,
    streetViewControl:false,
    
  };

  //Marker options
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService
      .getData()
      .then(async (vehicles: Response) => {
        this.data = await vehicles.json();
        this.status = 'ready';
      })
      .catch((error: Error) => {
        this.status = 'error';
        console.error('There was an error!', error);
      });
  }
}
