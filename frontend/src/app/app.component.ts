import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { BuyResponseModalComponent } from './buy-response-modal/buy-response-modal.component';
import { WithdrawResponseComponent } from './withdraw-response/withdraw-response.component';
import { SendResponseComponent } from './send-response/send-response.component';
import { SendTransactionModalComponent } from './send-transaction-modal/send-transaction-modal.component';

declare var TrezorConnect: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bitcoin.me';
  employees: any;
  amount: number;
  btcBuyed: number;
  companyWallet: number;
  bitstampBtc: number;
  bitstampEur: number;

  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.amount = 0;
    this.btcBuyed = 0;
    this.companyWallet = 0;
    this.bitstampBtc = 0;
    this.bitstampEur = 0;
  }

  ngOnInit() {
    this.http.get('/api/company/employees').subscribe((empl: any) => {
      this.employees = empl;
      this.calcAmount();
    });

    this.http.get('/api/company/balance').subscribe((balance: any) => {
      this.companyWallet = balance / 100000000;
    });

    this.http.get('/api/bitstamp/balance/btc').subscribe((balance: any) => {
      this.bitstampBtc = balance;
    });

    this.http.get('/api/bitstamp/balance/eur').subscribe((balance: any) => {
      this.bitstampEur = balance;
    });
  }

  calcAmount() {
    this.amount = 0;
    this.employees.forEach(element => {
      this.amount += element.amount;
    });
  }

  buyBitcoinOnExchange() {
    this.http.get('/api/bitstamp/buy', {}).subscribe((response) => {
      this.dialog.open(BuyResponseModalComponent, { data: response });
    });
  }

  withdrawFromExchange() {
    this.http.get('/api/bitstamp/withdraw', {}).subscribe((response) => {
      this.dialog.open(WithdrawResponseComponent);
    });
  }

  sendBitcoinToEmployees() {
    this.http.get('/api/bitcoin/outputs').subscribe((response) => {
      this.dialog.open(SendTransactionModalComponent, { data: response });
    });
  }

}
