import { Component, OnInit } from '@angular/core';
import { CarServieService } from '../car-servie.service';
import { LoginService } from '../login.service';
import { Client } from '../client';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { ShowinvoiceComponent } from '../showinvoice/showinvoice.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-status',
  templateUrl: './service-status.component.html',
  styleUrls: ['./service-status.component.scss']
})
export class ServiceStatusComponent implements OnInit {

  constructor(private route:Router,private CarSer: CarServieService , private loginser: LoginService , private dialog: MatDialog) { }

    displayedColumns: string[] = ['id','userId', 'brand', 'CarName', 'status','invoice'];
    dataSource= [];
  ngOnInit() {
    this.loadgrid();
  }

  loadgrid()
  {
    let username=this.loginser.getUser();
    console.log(username);
    this.CarSer.getServiceData(username).subscribe(
      res => {this.dataSource=res,console.log(res)}
    );
  }
  
  showinvoice(row:Client)
  {
    let id=row.id;
    this.openDialog(id);
  }

  openDialog(id:number) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data=id;

    this.dialog.open(ShowinvoiceComponent, dialogConfig);

    const dialogRef = this.dialog.open(ShowinvoiceComponent, dialogConfig);

    
    dialogRef.afterClosed().subscribe(
      res=>console.log("Done")
    );   
  }

  logout()
 {
  let username=this.loginser.getUser();
  this.loginser.logout();
  this.route.navigateByUrl("/login");
 }
  
}