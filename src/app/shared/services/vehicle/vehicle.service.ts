import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  status: string = 'loading';
  vehicleId: string ='';
  vehiclesList: any;

  private dataSubject = new BehaviorSubject<string>('');

  //set selected vehicle Id
  setSelectedVehicleId(id: string) {
    // console.log(id);
    this.dataSubject.next(id);
  }

  //retrieve selected vehicle Id
  getSelectedVehicleId() {
    return this.dataSubject.asObservable();
  }
  
  //retrieve list of vehicles last location
  async getVehicles(): Promise<any> {
    return await fetch(environment.vehiclesUrl)
    .then(this.httpResponses);
  }

   //retrieve selected vehicle and locate
   async getVehicle(id: string): Promise<Response> {
     return await fetch(environment.vehiclesUrl +"/" + id).
     then(this.httpResponses);
  }

  //handle http responses/errors
  httpResponses(response: Response) {
    return response;
  }

}
