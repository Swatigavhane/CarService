import { Component, OnInit } from '@angular/core';
import { CarServieService } from '../car-servie.service';

import { LoginService } from '../login.service';
import {CanActivate, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private CarSer: CarServieService , private loginser: LoginService , private route:Router) { }
  username="";
  pass="";
  result=[];
  ngOnInit() {
  }
  submit()
  {

    this.CarSer.loginme().subscribe(
      res => {this.result=res}
    );

    for(let i=0;i<this.result.length;i++)
    {
      let out=this.result[i];
      if(out.Name==this.username && out.pass==this.pass )
      {
        if(out.Name=="admin123")
        {
          this.loginser.setToken(out.Name);
          this.route.navigateByUrl("/AdminDash");
        }
        else{
         
            this.loginser.setToken(out.Name);
            this.route.navigateByUrl("/Client/DashBorad");
        }

        }
      }
    }
  
}

