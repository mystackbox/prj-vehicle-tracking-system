import { Component } from '@angular/core';
import { VehicleService } from '../../shared/services/vehicle/vehicle.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  status: string = 'loading';
  public today = Date.now();

  //vehicle data
  vehiclesList!: any;
  vehicle!: any;
  vehicleLocation!: string;
  vehiclePosition: any;

  //Position the markers
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 8;

  //Map default options
  mapOptions: google.maps.MapOptions = {
    center: { lat: -26.03, lng: 28.095 },
    draggable: true,
    zoomControl: false,
    streetViewControl: false,
  };

  //Marker default options
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };

  //DI
  constructor(private vehicleService: VehicleService) {
    
  }
  
  ngOnInit(): void {

  //Inital call
  this.getVehicles();

  //Fetch list every 30 seconds
  setInterval(async () => {
    let dateTime = new Date()
    console.log('Refresh time: ' + dateTime);
      this.getVehicles();
    }, 30000);

    //update vehicleId onChange
   this.locateVehicle();
  }

  getVehicles(): any{
    this.vehicleService
    .getVehicles()
    .then(async (vehicles: Response) => {
      this.vehiclesList = await vehicles.json();
      this.status = 'ready';
    })
    .catch((error: Error) => {
      this.status = 'error';
    });

  }


  locateVehicle(): void{
  
    this.vehicleService.getSelectedVehicleId().subscribe((id: string) => {
      if (id) {

        this.status = 'loading';

        this.vehicleService.getVehicle(id)
          .then(async (vehicle: Response) => {
            this.vehicle = await vehicle.json();
            
            this.zoom = 12;            
            this.mapOptions = {
              center: this.vehicle.location.at(-1).position
            }

            this.status = 'ready';
            
          })
          .catch((error: Error) => {
            this.status = 'error';
          });
      }
    });

  }

}
