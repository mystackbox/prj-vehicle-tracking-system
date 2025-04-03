import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  private dataConveyer = new BehaviorSubject<number>(0);
  selectedId = this.dataConveyer.asObservable();

  constructor() { }

  updateId(id: number) {
    console.log('Id received inside [pass-data service] ' + id)
    this.dataConveyer.next(id);
  }
}
