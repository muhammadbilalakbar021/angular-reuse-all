import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../class/vehicle';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  projectName: String = ""

  constructor(protected route: Router, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.currentMessage.subscribe(message => {
      this.projectName = message

    })
  }
  vehicle: Vehicle | any
  eventPassed: boolean = false;

  vehicles: Vehicle[] = [

    { vehicleNo: 1, name: 'Honda City', address: '', city: 'Lahore', state: '9/10', country: 'Pakistan' },
    { vehicleNo: 2, name: 'Toyota Corolla', address: '', city: 'Lahore', state: '9/10', country: 'Pakistan' },
    { vehicleNo: 3, name: 'Hyundai Sonata', address: '', city: 'Lahore', state: '9/10', country: 'Pakistan' },
    { vehicleNo: 4, name: 'Suzuki WagonR', address: '', city: 'Lahore', state: '9/10', country: 'Pakistan' },
    { vehicleNo: 5, name: 'Honda Civic', address: '', city: 'Lahore', state: '9/10', country: 'InPakistandia' },

  ]

  selectedCustomer: Vehicle = new Vehicle();



  showDetails(vehicle: Vehicle) {
    this.selectedCustomer = Object.assign({}, vehicle)
    console.log(this.selectedCustomer)
    // this.route.navigate(['./vehicle/bike', vehicle]);
  }

  update(vehicle: Vehicle) {
    console.log(vehicle)

    var cust = this.vehicles.find(e => e.vehicleNo == vehicle.vehicleNo)
    Object.assign(cust, vehicle)
    alert("Vehicle Saved")
    this.vehicle = vehicle
    this.eventPassed = true
  }
}
