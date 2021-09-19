import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from 'src/app/service/vehicle.service';
import { Vehicle } from '../../class/vehicle'

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  @Input() vehicle: Vehicle | any;
  @Output() vehicleChanged: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.route.params.subscribe((res: Vehicle | any) => {
      console.log(res.name)
      this.vehicle = res
    })
    // let vehicleObj: any = this.route.snapshot.paramMap.get('vehicle');
    // console.log(typeof (vehicleObj))

  }

  update() {
    this.vehicleChanged.emit(this.vehicle)
    this.vehicleService.changeMessage("last was on bike")
  }
}
