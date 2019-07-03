import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CarServieService } from '../car-servie.service';
import { Client } from '../client';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-showinvoice',
  templateUrl: './showinvoice.component.html',
  styleUrls: ['./showinvoice.component.scss']
})
export class ShowinvoiceComponent implements OnInit {

  id:number;
  Result_Client:Client;
  Result_invoce:Invoice;
  //Result_invoce:any;
  constructor(private CarSer: CarServieService,private dialogRef: MatDialogRef<ShowinvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.id=data;
      this.getInvoiceDetails(this.id);
    }

  ngOnInit() {
  }

  getInvoiceDetails(id:number)
  {
    this.CarSer.getServDetail(id).subscribe(
      res=> {
        this.Result_Client=res},
      error => console.log("error"+error)
    );

   this.CarSer.getinvoice(id).subscribe(
      res => {console.log("invoice res=="+res),this.Result_invoce=res,
      console.log(this.Result_invoce[0].amount)
      }
    );
  }

  close() {
    this.dialogRef.close();
}

}
