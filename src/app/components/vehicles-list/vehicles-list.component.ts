import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../shared/services/vehicle/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss',
  inputs: ['vehicleData'],
})
export class VehiclesListComponent implements OnInit {
  status: string = 'loading';
  vehiclesList: any;
  errorStatus = false;
  errorMessage: string = '';
  vehicles: any;

  constructor(private vehiclesApi: VehicleService) {}

   /**
   * Initial calls
   */
  async ngOnInit() {
    this.getVehicles();
    this.reLoadVehiclesList();
  }

  /**
   * Fetches the list of vehicles.
   * @returns an array of vehicle objects
   */
  async getVehicles() {
    try {
      this.vehiclesList = await this.vehiclesApi.get('/vehicles');
      this.vehicles = this.vehiclesList;
      this.errorStatus = false;
      console.log('Refreshed list...');
      console.log(this.vehicles);
    } catch (error: any) {
      this.errorStatus = true;
      this.errorMessage = error.message;
      console.error(error.message);
    }
  }

  /**
   * Fetches the list of vehicles every 5 seconds.
   * @returns an array of vehicle objects
   */
   reLoadVehiclesList() {
    setInterval(() => {
      this.getVehicles();
    }, 30000);
  }

  /**
   * Filters vehicles list and returns the result.
   * @param searchKeyword search text or string
   * @returns array of filtered list
   */
  searchVehicle(searchKeyword: string) {
    if (searchKeyword === '') {
      console.log('search returned unfiltered list...');
      return (this.vehicles = this.vehiclesList);
    }

    this.vehicles = this.vehiclesList.filter((response: any) =>
      response?.vehicleRegNo.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    console.log('search returned filtered list...');
  }
}
