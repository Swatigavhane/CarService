import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './client';
import { Invoice } from './invoice';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarServieService {

  constructor(private http:HttpClient) { }
  brandUrl="http://localhost:3000/Car-brands";
  carUrl="  http://localhost:3000/Car-Name";
  loginUrl="http://localhost:3000/Login";
  savedataUrl="http://localhost:3000/Client-service";


  getBrands():Observable<any>
  {
    return this.http.get(this.brandUrl);
  }
  getAllCars(brandName: String):Observable<any>
  {
    return this.http.get(this.carUrl+"/"+brandName);
  }
  loginme():Observable<any>
  {
    return this.http.get(this.loginUrl);
  }

  savedata(client:Client):Observable<object>
  {

    return this.http.post(this.savedataUrl,client,httpOptions);
  }
  getServiceData(id:string):Observable<Client[]>
  {
    return this.http.get<Client[]>("http://localhost:3000/Client-service/?userId="+id);
  }
  getServiceData_forAdmin():Observable<any>
  {
    return this.http.get("http://localhost:3000/Client-service");
  }
  updatestatus(client:Client)
  {
    return this.http.put("http://localhost:3000/Client-service/"+client.id,client);
  }

  saveinvoice(invoice:Invoice):Observable<object>
  {
      return this.http.post(" http://localhost:3000/invoice",invoice);
  }
  getServDetail(id:number):Observable<Client>
  {
    //console.log("getservdetail"+id);
    return this.http.get<Client>("http://localhost:3000/Client-service/"+id);
  }
  getinvoice(id:number):Observable<Invoice>
  {
    return this.http.get<Invoice>("http://localhost:3000/invoice/?ser_id="+id);
  }
}
