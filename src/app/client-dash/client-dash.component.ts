import { Component, OnInit } from '@angular/core';
import { CarServieService } from '../car-servie.service';
import { error } from 'util';
import { LoginService } from '../login.service';
import { Client } from '../client';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-dash',
  templateUrl: './client-dash.component.html',
  styleUrls: ['./client-dash.component.scss']
})
export class ClientDashComponent implements OnInit {

  constructor(private route:Router,private CarSer: CarServieService , private loginser: LoginService , private snackBar: MatSnackBar) { }

  public BrandsList:any=[];
  public carList:any=[];
  selectedcar:string='';
  selectedBrand:string='';
  public client:Client;
  ngOnInit() {
    this.getBrandList();
  }

  getBrandList()
  {
    
    this.CarSer.getBrands().subscribe(
      res => { this.BrandsList=res },
      error=>{console.log("Sorry")}
    );

  }

  LoadCars(brand: String)
  {
    this.CarSer.getAllCars(brand).subscribe(
      res=>{  this.carList=res.CarName},
      error=> {console.log(error)}
    )
  }

  ShowCarList(brandname: string)
  {
    this.selectedBrand=brandname;
    this.LoadCars(brandname);
  }
  getSelectedCar(carname: string)
  {
    this.selectedcar=carname;
  }

  submit_data()
  { 
    let username=this.loginser.getUser();
    let client={userId:username , brand:this.selectedBrand,CarName:this.selectedcar,status:'pending',invoice:"0"};
    
    this.CarSer.savedata(client).subscribe(
      res =>{console.log(res),
        this.snackBar.open("service added" ,"", {duration: 2000,})} ,
      error =>{ console.log(error)}
    );
    //console.log(this.selectedBrand+"  "+this.selectedcar);
  }

  logout()
 {
  let username=this.loginser.getUser();
  this.loginser.logout();
  this.route.navigateByUrl("/login");
 }

}
