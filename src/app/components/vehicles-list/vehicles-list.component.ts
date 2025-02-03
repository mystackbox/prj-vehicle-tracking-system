import { Component, Input, OnInit } from '@angular/core';
import { VehicleService } from '../../shared/services/vehicle/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss',
  inputs:['vehicleData'],
})
export class VehiclesListComponent implements OnInit {

  status: string = 'loading';
  vehiclesList!: any;
  errorMessage: string = "";
  filteredVehiclesList: any;


  constructor(private vehicleService: VehicleService) {
  }

  ngOnInit(): void { 
    
     //Inital call
    this.getVehicles();

     //Fetch list every 30 seconds     
    setInterval(async () => {
      console.log('Updated List data..');
      this.getVehicles();
   }, 30000);

  }

  //Set vehicle id
  setSelectedVehicleId(id: string) {
    this.vehicleService.setSelectedVehicleId(id);
  }

  //get list of vehicle's latest location
  getVehicles(){
    
    this.status = 'loading';

    this.vehicleService
    .getVehicles()
    .then(async (vehicles: Response) => {
    this.vehiclesList = await vehicles.json();
    this.filteredVehiclesList = this.vehiclesList;
       //ready status
      this.status = 'ready';

    })
    .catch((error: Error) => {
      this.status = 'error';
    });
  }


  /**
   * Filters the list and returns the result.
   * @param searchKeyWord The searck text or string
   * @returns The array of filtered list
 */
  searchVehicle(searchKeyWord: string){
    
    if(searchKeyWord === ''){
      return this.filteredVehiclesList = this.vehiclesList;
    }

    this.filteredVehiclesList = this.vehiclesList.filter((res: any) =>
      res?.vehicleRegNo.toLowerCase().includes(searchKeyWord.toLowerCase()),
    );

  }
}
