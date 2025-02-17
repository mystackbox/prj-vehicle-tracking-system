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
  vehiclesList!: any;
  errorMessage: string = '';
  filteredVehiclesList: any;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    //Inital call
    this.getVehicles();

    //Fetch list every 30 seconds
    setInterval(async () => {
      console.log('Updated list...');
      this.getVehicles();
    }, 30000);
  }

   /**
   * Sets vehicle id.
   * @param id sets vehicle id
   */
  setSelectedVehicleId(id: string) {
    this.vehicleService.setSelectedVehicleId(id);
  }

  /**
   * Fetches all vehicles.
   * @returns list of all vehicles
   */
  getVehicles() {
    this.status = 'loading';

    this.vehicleService
      .getVehicles()
      .then(async (vehicles: Response) => {
        this.vehiclesList = await vehicles.json();
        this.filteredVehiclesList = this.vehiclesList;
        this.status = 'ready';
      })
      .catch((error: Error) => {
        this.status = 'error';
      });
  }

  /**
   * Filters vehicles list and returns the result.
   * @param searchKeyword search text or string
   * @returns array of filtered list
   */
  searchVehicle(searchKeyword: string) {
    if (searchKeyword === '') {
      return (this.filteredVehiclesList = this.vehiclesList);
    }

    this.filteredVehiclesList = this.vehiclesList.filter((res: any) =>
      res?.vehicleRegNo.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }
}
