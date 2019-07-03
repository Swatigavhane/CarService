import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDashComponent } from './client-dash/client-dash.component';
import { ServiceStatusComponent } from './service-status/service-status.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login' , component:LoginComponent , pathMatch: 'full'}
  ,
  {
   path:'Client' , 
   children:[
              {path:'DashBorad' , component:ClientDashComponent ,  pathMatch: 'full'},
              {path:'Service' , component:ServiceStatusComponent ,  pathMatch: 'full'}
            ]
  },
  {
    path:'AdminDash' , component:AdmindashComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
