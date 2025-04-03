import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  private API_BASE_URL = environment.vehiclesUrl; //base url

   /**
   * Handles the http requests (GET, POST, PUT, DELETE).
   * @param endpoint http request url
   * @param method http method
   * @param body data to be sent to the server
   * @param header http header information
   * @returns http response (data, error, etc)
   */
  async fetchData(
    endpoint: string,
    method: string = 'GET',
    body: any = null,
    headers: any = {}
  ): Promise<any> {
    try {
      const controller = new AbortController(); // To handle timeouts
      const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

      const config: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...headers,
        },

        signal: controller.signal,
      };

      if (body) {
        config.body = JSON.stringify(body);
      }

      const response = await fetch(`${this.API_BASE_URL}${endpoint}`, config);
      clearTimeout(timeout); // Clear timeout if request is successful

      if (!response.ok) {
        let errorMessage = `HTTP Error: ${response.status}`;

        // Handle specific status codes
        if (response.status === 404) {
          errorMessage = 'Fetch Error: Resource Not Found';
        } else if (response.status === 500) {
          errorMessage = 'Internal Server Error';
        } else if (response.status === 401) {
          errorMessage = 'Unauthorized Access';
        }

        throw new Error(errorMessage);
      }

      // Try parsing the JSON response
      try {
        return await response.json();
      } catch (jsonError) {
        throw new Error('Invalid JSON response from server');
      }

    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          console.error('Error: Request timed out');
          throw new Error('Request timed out. Please try again.');
        } else if (error.message.includes('Failed to fetch')) {
          console.error('Network error: Check your internet connection');
          throw new Error('Network error: Unable to reach the server.');
        } else {
          console.error(`Fetch Error: ${error.message}`);
          throw error; // Rethrow error for handling in calling function
        }
      }
    }
  }

   /**
   * Sends the http request (GET).
   * @param endpoint http request url
   * @param header http header information
   * @returns http response (vehicles list, error, etc)
   */
  get(endpoint: string, headers: any = {}) {
    return this.fetchData(endpoint, 'GET', null, headers);
  }

   /**
   * Sends the http request (GET) for vehicle with specific id.
   * @param endpoint http request url
   * @param header http header information
   * @returns http response (vehicle object, error, etc)
   */
  getVehicle(endpoint: string, headers: any = {}) {
    return this.fetchData(endpoint, 'GET', null, headers);
  }
}
