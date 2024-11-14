import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  status: string = 'loading';
  async getData(): Promise<Response> {
    const response = await fetch(environment.vehiclesUrl);
    return this.handleErrors(response);
  }

  handleErrors(response: Response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
}
