import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../shared/services/vehicle/vehicle.service';
import { PassDataService } from '../../shared/services/passData/pass-data.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss',
  inputs: ['vehicleData'],
})
export class VehiclesListComponent implements OnInit {
  vehiclesList: any;
  vehicles: any;
  errorStatus: boolean = false;
  errorMessage: string = '';

  constructor(
    private vehiclesApi: VehicleService,
    private passIdApi: PassDataService
  ) {} //DI

  /**
   * Initial calls
   */
  ngOnInit(): void {
    this.getVehicles();
  }

  /**
   * Fetches a list of vehicles.
   * @returns an array of objects for vehicles
   */
  async getVehicles(): Promise<any> {
    try {
      this.vehiclesList = await this.vehiclesApi.get('/vehicles');
      this.vehicles = this.vehiclesList;
    } catch (error: any) {
      this.errorStatus = true;
      this.errorMessage = error.message;
    }
  }

  /**
   * Filters vehicles list and returns the result.
   * @param searchKeyword search text or string
   * @returns array of filtered list
   */
  searchVehicle(searchKeyword: string): void {
    if (searchKeyword === '') {
      return (this.vehicles = this.vehiclesList);
    }
    this.vehicles = this.vehiclesList.filter((response: any) =>
      response?.vehicleRegNo.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }

  /**
   * Sets vehicle id.
   * @param id sets vehicle id
   */
  locateVehicle(id: number): void {
    this.passIdApi.updateId(id);
  }

  /**
   * Resets values to default.
   */
  ngOnDestroy() {
    this.vehicles = null;
  }
}
