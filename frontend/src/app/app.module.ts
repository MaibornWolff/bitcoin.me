import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BuyResponseModalComponent } from './buy-response-modal/buy-response-modal.component';
import { WithdrawResponseComponent } from './withdraw-response/withdraw-response.component';
import { SendResponseComponent } from './send-response/send-response.component';
import { SendTransactionModalComponent } from './send-transaction-modal/send-transaction-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    BuyResponseModalComponent,
    SendTransactionModalComponent,
    WithdrawResponseComponent,
    SendResponseComponent,
    SendTransactionModalComponent
  ],
  entryComponents: [
    BuyResponseModalComponent,
    SendResponseComponent,
    WithdrawResponseComponent,
    SendTransactionModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
