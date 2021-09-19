import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vehicle } from 'src/app/class/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() vehicle: Vehicle | any;
  @Output() vehicleChangedCar: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();


  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  update() {
    this.vehicleChangedCar.emit(this.vehicle)
    this.vehicleService.changeMessage("last was on car")
  }

}
