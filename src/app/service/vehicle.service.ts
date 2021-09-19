import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private messageSource = new BehaviorSubject<string>('No Ticket Selected');
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
