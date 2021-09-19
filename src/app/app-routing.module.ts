import { TruckComponent } from './vehicle/truck/truck.component';
import { CarComponent } from './vehicle/car/car.component';
import { BikeComponent } from './vehicle/bike/bike.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        'path': 'login',
        component: LoginComponent
      },
      {
        'path': 'signup',
        component: SignupComponent
      }

    ]
  },
  {
    canActivate: [AuthGuardGuard],
    path: 'vehicle',
    component: VehicleComponent,
    // canActivateChild: [AuthGuardGuard],
    children: [
      {
        path: 'bike',
        component: BikeComponent
      },
      {
        path: 'car',
        component: CarComponent
      },
      {
        path: 'truck',
        component: TruckComponent
      },
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
