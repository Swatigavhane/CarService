import { Component, OnInit } from '@angular/core';
import { CarServieService } from '../car-servie.service';
import { LoginService } from '../login.service';
import { Client } from '../client';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { InvoiceComponent } from '../invoice/invoice.component';
import { Invoice } from '../invoice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.scss']
})
export class AdmindashComponent implements OnInit {

  constructor(private route:Router,private CarSer: CarServieService , private loginser: LoginService , private dialog: MatDialog) { }
  displayedColumns: string[] = ['id','userId', 'brand', 'CarName', 'status','invoice'];
  dataSource= [];
  show:boolean=false;
  statusList:string[]=["pending" , "In progress" ,"Done"];
  stat:string="pending";
  amount:number=0;
  
  ngOnInit() {
    this.loadgrid();
  }
  loadgrid()
  {

    this.CarSer.getServiceData_forAdmin().subscribe(
      res => {this.dataSource=res,console.log(res)}
    );
  }

  onselect(val: string,id:string,userid:string)
  {
    console.log("id"+id+"userid"+userid)
    console.log("id=="+document.getElementsByName(userid+id));
    if(val=="Done")
    {
      console.log("Done here");
      document.getElementById(userid+id).style.visibility='visible';
      //document.getElementsByName(id).style.visibility='visible';
     //document.getElementById(id).style.visibility='visible';
     //document.getElementById(id).style.display=
    }
  }
  create_invoice(row:Client)
  {
    console.log(row);
    this.openDialog(row);
  }

  openDialog(datac:Client) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data=datac;

    this.dialog.open(InvoiceComponent, dialogConfig);

    const dialogRef = this.dialog.open(InvoiceComponent, dialogConfig);

    
    dialogRef.afterClosed().subscribe(
        data => {this.amount=data,
          console.log("object inside subscribe"+datac),
          this.do(this.amount,datac.id,datac.brand,datac.userId,datac.CarName),
          console.log("Dialog output:", data)}
    );   
      
      
 }
 logout()
 {
  let username=this.loginser.getUser();
  this.loginser.logout();
  this.route.navigateByUrl("/login");

 }

      do(amount:number,id,brand,userId,CarName)
      {
        let invoice:Invoice={ser_id:id, amount:amount};
        let client={id:id,userId:userId , brand:brand,CarName:CarName,status:"Done",invoice:"1"};
        this.CarSer.saveinvoice(invoice)
        .subscribe(
                    res =>{console.log("invoice saved")}
                  );
       
        console.log("data"+client);
        this.CarSer.updatestatus(client)
        .subscribe(
                    res=>{console.log("status updated") }
                  );
      
      }
}
