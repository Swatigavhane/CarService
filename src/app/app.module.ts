import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginService } from './login.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientDashComponent } from './client-dash/client-dash.component';
import { ServiceStatusComponent } from './service-status/service-status.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import {MatDialogModule,MatSelectModule ,MatSnackBarModule, MatCardModule , MatButtonModule , MatInputModule , MatMenuModule,MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ClientServiceStatusComponent } from './client-service-status/client-service-status.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ShowinvoiceComponent } from './showinvoice/showinvoice.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientDashComponent,
    ServiceStatusComponent,
    LoginComponent,
    ClientServiceStatusComponent,
    AdmindashComponent,
    InvoiceComponent,
    ShowinvoiceComponent,
    
  ],
  imports: [
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    BrowserModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  entryComponents: [InvoiceComponent,ShowinvoiceComponent]
})
export class AppModule { }
