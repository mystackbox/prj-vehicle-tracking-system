import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../shared/services/vehicle/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss'
})
export class VehiclesListComponent implements OnInit {

  status: string = 'loading';
  data!: any;

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
        // console.error('There was an error!', error);
      });
  }
}
