import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  d:any[]=[];
  constructor(private dialogRef: MatDialogRef<InvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.d=data;
     }
     value:number=0; 
  ngOnInit() {
    
  }

  save() {
    this.dialogRef.close(this.value);
  }

  close() {
    this.dialogRef.close();
}

}
